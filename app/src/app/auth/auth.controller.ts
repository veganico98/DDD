import { Body, Controller, Post } from "@nestjs/common";
import { AuthloginDto } from "./dto/auth-login.dto";
import { AuthRegisterDto } from "./dto/auth-register.dto";
import { AuthForgetDto } from "./dto/auth-forget.dto";
import { AuthResetDto } from "./dto/auth-reset.dto";

@Controller('auth')
export class AuthController{
    @Post('login')
    async login(@Body() body: AuthloginDto) {}

    @Post('')
    async register(@Body() body: AuthRegisterDto) {}

    @Post('')
    forget(@Body() body: AuthForgetDto) {}

    @Post('reset')
    reset(@Body() body: AuthResetDto) {}
}