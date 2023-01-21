import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { Comment, CommentDocument } from '../entities/comment.entity';

@Injectable()
export class CommentService {

  constructor(
    @InjectModel('comment') private readonly commentModel: Model<CommentDocument>
  ){}

  async createUser(createCommentDto: CreateCommentDto) : Promise<Comment>{
    const createComment = new this.commentModel(createCommentDto);
    return await createComment.save();
  }
}
