import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Controllers } from './controller';
import { CommentSchema } from './entities/comment.entity';
import { Services } from './services';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://comment:j5OJZ1uorYP8kxD4@cluster0.ad379n6.mongodb.net/?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([
      {
        name: 'comment',
        schema: CommentSchema
      }
    ])
  ],
  controllers: Controllers,
  providers: Services,
})
export class CommentModule {}
