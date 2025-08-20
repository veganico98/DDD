import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(idade: number): string {
    if (idade > 18){
      return 'Maior de idade';
    } else {
      return 'Menor de idade';
    }
  }
}
