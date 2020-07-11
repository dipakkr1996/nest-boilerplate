import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModelModule } from './model/model.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Connection} from 'typeorm';

@Module({
  imports: [ModelModule, TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection : Connection){
    console.log(connection);
  }
}
