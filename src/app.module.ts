import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TimeController } from './api/v1/time/time.controller';
import { MakeController } from './api/v1/make/make.controller';
import { ModelController } from './api/v1/model/model.controller';
import { VariantController } from './api/v1/variant/variant.controller';

@Module({
  imports: [],
  controllers: [AppController, TimeController, MakeController, ModelController, VariantController],
  providers: [AppService],
})
export class AppModule {}
