import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { Comment, CommentDocument } from '../entities/comment.entity';

@Injectable()
export class CommentService {

  constructor(
    @InjectModel('comment') private readonly commentModel: Model<CommentDocument>
  ) { }

  async getAllComments() {
    try {

      const comments: CreateCommentDto[] = [];

      const results = await this.commentModel.find();

      results.map((item) => {
        comments.push(
          CreateCommentDto.convertAllElements(
            item.id,
            item.body,
            item.author,
          )
        )
      });

      return comments;

    } catch (ex) {
      throw new InternalServerErrorException('Internal server error');
    }
  }

  async createUser(createCommentDto: CreateCommentDto): Promise<Comment> {
    try {
      const createComment = new this.commentModel(createCommentDto);
      const result = await createComment.save();

      return result.id;

    } catch (ex) {
      throw new InternalServerErrorException('Internal server error');
    }
  }
}
