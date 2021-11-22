import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongoDbUrl, mongodbOptions } from './configs/mongodb';

@Module({
  imports: [
    TrackModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(getMongoDbUrl(process), mongodbOptions),
  ],
})
export class AppModule {}
