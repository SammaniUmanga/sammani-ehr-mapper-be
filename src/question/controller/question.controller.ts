import { Body, Controller, Get, Post } from '@nestjs/common';
import { QuestionService } from '../services/question-service';
import { CreateQuestionDto } from '../dto/create-question.dto';

@Controller('questions')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Post()
  create(@Body() dto: CreateQuestionDto) {
    return this.questionService.createQuestion(dto);
  }

  @Get()
  findAll() {
    return this.questionService.getAllQuestions();
  }
}
