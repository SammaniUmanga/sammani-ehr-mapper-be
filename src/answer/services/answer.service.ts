import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubmitAnswerDto } from '../dto/submit-answer.dto';
import { Answer, PatientAnswer } from '../../common/entity/answer.entity';
import { Question } from '../../common/entity/question.entity';
import { Patient } from '../../common/entity/patient.entity';
import { AnswerRepository } from 'src/common/repository/answer.repository';
import { QuestionRepository } from 'src/common/repository/question.repository';
import { PatientRepository } from 'src/common/repository/patient.repository';

@Injectable()
export class AnswerService {
  constructor(
    @InjectRepository(Answer)
    private answerRepository: AnswerRepository,

    @InjectRepository(PatientAnswer)
    private patientAnswerRepository: Repository<PatientAnswer>,

    @InjectRepository(Question)
    private questionRepository: QuestionRepository,

    @InjectRepository(Patient)
    private patientRepository: PatientRepository,
  ) {}

  async createAnswer(dto: SubmitAnswerDto): Promise<PatientAnswer> {
    const question = await this.questionRepository.findOneByOrFail({
      question_id: dto.questionId,
    });
    const patient = await this.patientRepository.findOneByOrFail({
      id: dto.patientId,
    });

    const answer = this.answerRepository.create({
      question,
      answer_text: dto.answer_text,
      language: dto.language,
      timestamp: new Date(),
    });
    const savedAnswer = await this.answerRepository.save(answer);

    const patientAnswer = this.patientAnswerRepository.create({
      patient,
      answer: savedAnswer,
    });

    return this.patientAnswerRepository.save(patientAnswer);
  }

  async getAnswersByPatient(patient_id: string): Promise<PatientAnswer[]> {
    return this.patientAnswerRepository.find({
      where: { patient: { id: patient_id } },
      relations: ['answer', 'answer.question'],
    });
  }

  async getAnswers(): Promise<Answer[]> {
    return this.answerRepository.find({ relations: ['question'] });
  }

  async findById(answerId: string) {
    return this.answerRepository.findOneOrFail({
      where: { answer_id: answerId },
    });
  }
}
