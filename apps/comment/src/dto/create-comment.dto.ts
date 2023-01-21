import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {

  id: string;
  
  @ApiProperty()
  title: string;

  @ApiProperty()
  body: string;

  @ApiProperty()
  author: string;

  private constructor(id: string, body: string, author: string) {
    this.id = id;
    this.body = body;
    this.author = author;
  }

  static convertAllElements (id: string, body: string, author: string) {
    return new CreateCommentDto(id, body, author);
  } 
}
