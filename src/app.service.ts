import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // constructor(private sequelize: Sequelize) {}
  getHello(): string {
    return 'Hello World!';
  }
}
