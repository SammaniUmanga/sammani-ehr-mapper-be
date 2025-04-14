import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionRepository } from 'src/common/repository/question.repository';
import { CreateQuestionDto } from '../dto/create-question.dto';
import { Question } from 'src/common/entity/question.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepo: QuestionRepository,
  ) {}

  async createQuestion(dto: CreateQuestionDto) {
    const question = this.questionRepo.create(dto);
    return this.questionRepo.save(question);
  }

  async getAllQuestions() {
    return this.questionRepo.find();
  }

  async findById(questionId: string) {
    return this.questionRepo.findOneOrFail({
      where: { question_id: questionId },
    });
  }
}
