import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { TrackModule } from './structure/track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongoDbUrl, mongodbOptions } from './configs/mongodb';
import { FileModule } from './structure/file/file.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(getMongoDbUrl(process), mongodbOptions),
    TrackModule,
    FileModule,
  ],
})
export class AppModule {}
