import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { TrackModule } from './structure/track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongoDbUrl, mongodbOptions } from './configs/mongodb';
import { FileModule } from './structure/file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    ConfigModule.forRoot(),
    MongooseModule.forRoot(getMongoDbUrl(process), mongodbOptions),
    TrackModule,
    FileModule,
  ],
})
export class AppModule {}
