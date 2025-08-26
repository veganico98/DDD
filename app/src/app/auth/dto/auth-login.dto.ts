import { IsEmail, IsStrongPassword } from "class-validator";

export class AuthloginDto {
    @IsEmail()
      email: string;
    
      @IsStrongPassword({
        minLength: 6,
      })
      password: string;
}