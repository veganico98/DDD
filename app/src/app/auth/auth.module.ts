import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { UserModule } from "../user/user.module";

@Module({
    imports: [JwtModule.register({
            secret: 'a2d1wa156d1a651d65a16d5a1d6a5d1a65d1a65',
        }),
        UserModule,
    ],
    controllers: [AuthController],
})
export class AuthModule {}