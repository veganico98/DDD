import { Body, Controller, Post } from "@nestjs/common";
import { AuthloginDto } from "./dto/auth-login.dto";
import { AuthRegisterDto } from "./dto/auth-register.dto";
import { AuthForgetDto } from "./dto/auth-forget.dto";
import { AuthResetDto } from "./dto/auth-reset.dto";
import { UserService } from "../user/user.service";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController{
    constructor(
        private readonly authService: AuthService,
    ){
        
    }

    @Post('login')
    async login(@Body() {email, password}: AuthloginDto) {
        return this.authService.login(email, password);
    }

    @Post('register')
    async register(@Body() body: AuthRegisterDto) {
        return this.authService.register(body);
    }

    @Post('forget')
    forget(@Body() { email }: AuthForgetDto) {
    return this.authService.forget(email);
  }

    @Post('reset')
    reset(@Body() {password, token}: AuthResetDto) {
        return this.authService.reset(password, token);
    }
}