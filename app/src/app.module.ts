import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { AuthModule } from './app/auth/auth.module';
import { UserModule } from './app/user/user.module';
import { ProductModule } from './app/product/product.module';

@Module({
  imports: [UserModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}