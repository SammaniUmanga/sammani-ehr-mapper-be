import { EntityRepository, Repository } from 'typeorm';
import { Question } from '../../common/entity/question.entity';

@EntityRepository(Question)
export class QuestionRepository extends Repository<Question> {
  async createQuestion(data: Partial<Question>) {
    return this.save(data);
  }

  async findAllQuestions() {
    return this.find();
  }

  async findQuestionById(id: number) {
    return this.findOneBy({ question_id: id.toString() });
  }
}
