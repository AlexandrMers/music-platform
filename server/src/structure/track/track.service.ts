import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema } from 'mongoose';

// Schemas
import { Track, TrackDocument } from './schemas/track.schema';
import { Comment, CommentDocument } from './schemas/comment.schema';

// Data Transfers Objects
import { CreateTrackDto } from './dto/create-track.dto';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class TrackService {
  constructor(
    @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
  ) {}

  async create(dto: CreateTrackDto, picture, audio): Promise<Track> {
    return this.trackModel.create({ ...dto, listens: 0 });
  }

  async getAll(): Promise<Track[]> {
    return this.trackModel.find();
  }

  async getOne(id: Schema.Types.ObjectId): Promise<Track> {
    return this.trackModel.findById(id).populate('comments');
  }

  async delete(id: Schema.Types.ObjectId): Promise<Track> {
    return this.trackModel.findByIdAndDelete(id);
  }

  async addComment(dto: CreateCommentDto): Promise<Comment> {
    const track = await this.trackModel.findById(dto.trackId);
    const comment = await this.commentModel.create({ ...dto });
    track.comments.push(comment._id);
    await track.save();
    return comment;
  }
}
