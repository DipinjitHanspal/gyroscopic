import { Module } from '@nestjs/common';
import { ToDoModule } from './to-do/to-do.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ToDoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
