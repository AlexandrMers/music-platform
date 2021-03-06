import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ObjectId, Schema } from 'mongoose';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

import { CreateTrackDto } from './dto/create-track.dto';
import { CreateCommentDto } from './dto/create-comment.dto';

import { TrackService } from './track.service';

@Controller('/tracks')
export class TrackController {
  constructor(private trackService: TrackService) {}

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      {
        name: 'picture',
        maxCount: 1,
      },
      {
        name: 'audio',
        maxCount: 1,
      },
    ]),
  )
  create(
    @UploadedFiles()
    files: {
      picture: Express.Multer.File[];
      audio: Express.Multer.File[];
    },
    @Body() dto: CreateTrackDto,
  ) {
    const { picture, audio } = files;
    return this.trackService.create(dto, picture[0], audio[0]);
  }

  @Get()
  getAll(@Query('count') count: string, @Query('offset') offset: string) {
    return this.trackService.getAll(count, offset);
  }

  @Get('/search')
  search(@Query('query') query: string) {
    return this.trackService.search(query);
  }

  @Get(':id')
  getOne(@Param('id') id: Schema.Types.ObjectId) {
    return this.trackService.getOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: Schema.Types.ObjectId) {
    return this.trackService.delete(id);
  }

  @Post('/comment')
  addComment(@Body() dto: CreateCommentDto) {
    return this.trackService.addComment(dto);
  }

  // TODO - добавить эндпоинт для получения всех комментариев по айди трека...

  @Post(':id/listen')
  listen(@Param('id') id: ObjectId) {
    return this.trackService.listen(id);
  }
}
