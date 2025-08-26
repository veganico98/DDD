import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private prismaService: PrismaService) {}

  async findAll() {
    return this.prismaService.product.findMany();
  }

  async findOne(id: number) {
    return this.prismaService.product.findUnique({
      where: {
        id,
      },
    });
  }

  async create(createProductDto: CreateProductDto) {
    return this.prismaService.product.create({
      data: createProductDto,
    });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    await this.productExists(id);

    return this.prismaService.product.update({
      data: updateProductDto,
      where: {
        id,
      },
    });
  }

  async remove(id: number) {
    await this.productExists(id);

    return this.prismaService.product.delete({
      where: {
        id,
      },
    });
  }

  async productExists(id: number) {
    if (!(await this.findOne(id))) {
      throw new NotFoundException(`O usuário ID ${id} não foi encontrado!`);
    }
  }
}