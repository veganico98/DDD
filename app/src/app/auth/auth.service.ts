import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from '../user/user.service';
import { AuthloginDto } from './dto/auth-login.dto';
import { AuthRegisterDto } from './dto/auth-register.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly prismaService: PrismaService,
        private readonly userService: UserService,
    ) {}


    createToken(user: User) {
    return {
      accessToken: this.jwtService.sign(
        {
          id: user.id,
          name: user.name,
          email: user.email,
        },
        {
          expiresIn: '7 days',
          subject: String(user.id),
          issuer: 'login',
          audience: 'users',
        },
      ),
    };
  }

    async checkToken() {

    }

    async login(email: string, password: string){
        const user = await this.prismaService.user.findFirst({
            where: { email, password }
        })
        if (!user) {
            throw new UnauthorizedException('Credenciais inválidas');
        }

        return this.createToken(user);
    }

      async forget(email: string) {
    const user = await this.prismaService.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Email está incorreto!');
    }

        return user;
    }

    async reset(password: string, token: string){

        const id = 1;

        const user = await this.prismaService.user.update({
            where: {id},
            data: { password }
        })

        return this.createToken(user);
    }

    async register(data: AuthRegisterDto){
        const user = await this.userService.create(data);

        return this.createToken(user);
    }
}