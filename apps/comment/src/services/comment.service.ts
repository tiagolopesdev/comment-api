import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { Comment, CommentDocument } from '../entities/comment.entity';

@Injectable()
export class CommentService {

  constructor(
    @InjectModel('comment') private readonly commentModel: Model<CommentDocument>
  ){}

  async getAllComments() {
    try{
      return await this.commentModel.find();
    } catch (ex) {
      throw new InternalServerErrorException('Internal server error');
    }
  }

  async createUser(createCommentDto: CreateCommentDto) : Promise<Comment>{    
    try{
      const createComment = new this.commentModel(createCommentDto);
      const result = await createComment.save();

      return result.id;

    } catch (ex) {
      throw new InternalServerErrorException('Internal server error');
    }
  }
}
