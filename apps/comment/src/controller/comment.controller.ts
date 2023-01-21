import { Body, Controller, Post, Res, Req, HttpStatus, Get, ParseUUIDPipe, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { CommentService } from '../services/comment.service';

@ApiTags('Comment')
@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}
  
  @Get(':id')
  @ApiOperation({ summary: 'Obter comentários por id' })
  async getCommentsById(
    @Res() response,
    @Param('id') id: string 
  ) {
    const commentReponse = await this.commentService.getCommentsById(id);

    response.status(HttpStatus.OK).send(commentReponse);
  }
  
  @Get()
  @ApiOperation({ summary: 'Obter todos os comentários' })
  async getAllComments(
    @Res() response    
  ) {
    const commentReponse = await this.commentService.getAllComments();

    response.status(HttpStatus.OK).send(commentReponse);
  }

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
