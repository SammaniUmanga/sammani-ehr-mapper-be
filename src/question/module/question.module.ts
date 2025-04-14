import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from '../../common/entity/question.entity';
import { QuestionRepository } from 'src/common/repository/question.repository';
import { QuestionController } from '../controller/question.controller';
import { QuestionService } from '../services/question-service';

@Module({
  imports: [TypeOrmModule.forFeature([
    Question, 
    // QuestionRepository
  ])],
  controllers: [QuestionController],
  providers: [QuestionService],
  exports: [QuestionService],
})
export class QuestionModule {}
