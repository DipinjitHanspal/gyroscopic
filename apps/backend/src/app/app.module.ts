import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ToDoModule } from './to-do/to-do.module';


@Module({
  imports: [
    ToDoModule,
    MongooseModule.forRoot('mongodb+srv://clientServer:Gyrosc0pic@devcluster.ebjxv.mongodb.net/DevCluster?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
