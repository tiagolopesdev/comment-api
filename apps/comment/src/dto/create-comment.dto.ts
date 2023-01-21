import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {
  
  @ApiProperty()
  title: string;

  @ApiProperty()
  body: string;

  @ApiProperty()
  author: string;
}
