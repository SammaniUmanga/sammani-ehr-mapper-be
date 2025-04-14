import { EntityRepository, Repository } from 'typeorm';
import { Answer } from '../../common/entity/answer.entity';

@EntityRepository(Answer)
export class AnswerRepository extends Repository<Answer> {
  async createAnswer(answerData: Partial<Answer>) {
    return this.save(answerData);
  }

  async findAllAnswers() {
    return this.find();
  }

  async findAnswerById(id: number) {
    return this.findOneBy({ answer_id: id.toString() });
  }

  async findByAnswerId(answer_id: string){
    const result = await this.findOne({ where: { answer_id } });
    return result;
  }
}
