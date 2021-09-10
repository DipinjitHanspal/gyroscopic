import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ToDoModule } from './to-do/to-do.module';


@Module({
  imports: [
    ToDoModule,
    MongooseModule.forRoot('mongodb+srv://clientServer:Gyrosc0pic@devcluster.ebjxv.mongodb.net/DevCluster?retryWrites=true&w=majority')],
  controllers: [],
  providers: [],
})
export class AppModule {}
