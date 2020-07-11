import { Controller, Get } from '@nestjs/common';

@Controller('/time')
export class TimeController {
  @Get()
  getTime(): any {
    return {
      time: new Date(),
    };
  }
}
