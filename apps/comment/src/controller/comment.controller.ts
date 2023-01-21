import { Body, Controller, Post, Res, Req, HttpStatus } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { CommentService } from '../services/comment.service';

@Controller('Comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()    
  @ApiOperation({ summary: 'Adicionar um comentário' })
  async createComment(
    @Res() response,
    @Body() payload: CreateCommentDto
  ) {
    const commentResponse = await this.commentService.createUser(payload);

    response.status(HttpStatus.CREATED).send({
      message: 'Comment successfully created',
      id: commentResponse
    })
  }
}
