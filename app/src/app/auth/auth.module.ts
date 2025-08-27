import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { UserModule } from "../user/user.module";
import { AuthService } from "./auth.service";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
    imports: [JwtModule.register({
            secret: 'a2d1wa156d1a651d65a16d5a1d6a5d1a65d1a65',
        }),
        UserModule,
    ],
    providers: [AuthService, PrismaService],
    controllers: [AuthController],
})
export class AuthModule {}