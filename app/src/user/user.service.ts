import { Injectable} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UserService {
    findAll() {
        return "Você está listando todos os usuários";
    }
    
    findOne(id: number) {
        return `Você está procurando o id: ${id}`;
    }

    create(createUserDto: CreateUserDto) {
        return createUserDto;
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return {id, updateUserDto};
    }

    remove(id: number){
        return `Você está removendo o usuário de id: ${id}`;
    }
}