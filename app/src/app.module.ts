import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './app/user/user.module';
import { ProductModule } from './app/product/product.module';
import { PrismaModule } from './prisma/PrismaModule';

@Module({
  imports: [UserModule, ProductModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}