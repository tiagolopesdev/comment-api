import { Body, Controller, Post } from '@nestjs/common';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { CommentService } from '../services/comment.service';

@Controller('Comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()    
  async createComment(@Body() payload: CreateCommentDto) {
    return await this.commentService.createUser(payload);
  }
}
