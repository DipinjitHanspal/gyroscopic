import { All, Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { ToDoModule } from './to-do/to-do.module';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @All()
  toDo()
  {
    return () => ToDoModule
  }
}
