import { Controller, Post, Body, Get, Logger, Param } from '@nestjs/common';
import { ModelService } from './model.service';
import { VehicleModel } from './model.model';

@Controller('model')
export class ModelController {
  // private to make sure that
  constructor(private readonly modelService: ModelService) {}

  @Post() // Decorators
  addModel(
    @Body('v_model_name') model_name: string,
    @Body('v_model_slug') model_slug: string,
    @Body('v_min_price') min_price: string,
  ): any {
    const generateId = this.modelService.addNewModel(
      model_name,
      model_slug,
      min_price,
    );
    Logger.log(`Model Created Successfully ${generateId}`);
    return generateId;
  }

  @Get()
  getAllModels(){
    return this.modelService.getAllModels();
  }

  @Get(':slug')
  getModel(@Param('slug') v_model_slug: string): any {
    return this.modelService.getVehicleModelData(v_model_slug);
  }
}
