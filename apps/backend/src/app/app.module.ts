import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ToDoModule } from './to-do/to-do.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [
    ToDoModule,
    MongooseModule.forRoot('mongodb+srv://clientServer:Gyroscopic@devcluster.ebjxv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
