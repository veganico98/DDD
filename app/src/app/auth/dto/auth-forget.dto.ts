import { IsEmail } from "class-validator";
import { CreateUserDto } from "src/app/user/dto/create-user.dto";

export class AuthForgetDto extends CreateUserDto {
    @IsEmail()
    email: string;
}