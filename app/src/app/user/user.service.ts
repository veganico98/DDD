import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async findAll() {
    return this.prismaService.user.findMany();
  }

  async findOne(id: number) {
    return this.prismaService.user.findUnique({
      where: {
        id,
      },
    });
  }

  async create(createUserDto: CreateUserDto) {
    return this.prismaService.user.create({
      data: createUserDto,
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.userExists(id);

    return this.prismaService.user.update({
      data: updateUserDto,
      where: {
        id,
      },
    });
  }

  async remove(id: number) {
    await this.userExists(id);

    return this.prismaService.user.delete({
      where: {
        id,
      },
    });
  }

  async userExists(id: number) {
    if (!(await this.findOne(id))) {
      throw new NotFoundException(`O usuário ID ${id} não foi encontrado!`);
    }
  }
}