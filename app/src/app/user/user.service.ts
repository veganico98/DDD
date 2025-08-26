import { Injectable} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

    findAll() {
        return this.prismaService.user.findMany()
    }
    
    findOne(id: number) {
        return this.prismaService.user.findUnique ({
            where: {
                id
            }
        })
    }

    create(createUserDto: CreateUserDto) {
        return this.prismaService.user.create({
            data: createUserDto
        })
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return {id, updateUserDto};
    }

    remove(id: number){
        return `Você está removendo o usuário de id: ${id}`;
    }
}