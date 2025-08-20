import { Injectable} from "@nestjs/common";

@Injectable()
export class UserService {
    findOne(id: number) {
        return `Você está procurando o id: ${id}`;
    }
}