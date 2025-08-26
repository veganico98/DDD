import { IsJWT, IsStrongPassword } from "class-validator";
import { CreateUserDto } from "src/app/user/dto/create-user.dto";

export class AuthResetDto extends CreateUserDto {
    

  @IsStrongPassword({
    minLength: 6,
  })
  password: string;

  @IsJWT()
    token: string;
}