import { Injectable, NotFoundException} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UserService {

    constructor(private prismaService: PrismaService){}

    async findAll() {
        return this.prismaService.user.findMany()
    }
    
    async findOne(id: number) {
        return this.prismaService.user.findUnique ({
            where: {
                id
            }
        })
    }

    async create(createUserDto: CreateUserDto) {
        return this.prismaService.user.create({
            data: createUserDto
        })
    }

    async update(id: number, updateUserDto: UpdateUserDto) {
        if (!(await this.findOne(id))) {
            throw new NotFoundException(`O usuário ID ${id} não foi encontrado`)   
    }

        return this.prismaService.user.update({
            data: updateUserDto,
            where: {
                id,
            },
        });
    }
    
    remove(id: number){
        return this.prismaService.user.delete({
            where: {
                id,
            },
        });
    }
}