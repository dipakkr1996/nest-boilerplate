import { Injectable, NotFoundException } from '@nestjs/common';
import { VehicleModel } from './model.model';

@Injectable()
export class ModelService {
  private models: VehicleModel[] = [];

  addNewModel(
    v_model_name: string,
    v_model_slug: string,
    v_min_price: string,
  ): any {
    const modelID = (Math.floor(Math.random()*90000) + 10000).toString();
    const newModel = new VehicleModel(
      modelID,
      v_model_name,
      v_model_slug,
      v_min_price,
    );
    this.models.push(newModel);
    return newModel;
  }

  getModelSlug(v_model_slug: string): any {
    return { v_model_slug: v_model_slug };
  }

  getAllModels(){
    return [...this.models];
  }

  getVehicleModelData(param_id : string){
    const model = this.models.find(model => model.v_model_slug === param_id);
    if(!model){
      throw new NotFoundException('Model ID Not Exist'); // Auto Send 404 response
    }

    return {...model};
  }
}
