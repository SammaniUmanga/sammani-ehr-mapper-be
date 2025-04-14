import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Answer, PatientAnswer } from 'src/common/entity/answer.entity';
import { AnswerController } from '../controller/answer.controller';
import { AnswerService } from '../services/answer.service';
import { Question } from '../../common/entity/question.entity';
import { Patient } from '../../common/entity/patient.entity';
import { AnswerRepository } from 'src/common/repository/answer.repository';
import { PatientRepository } from 'src/common/repository/patient.repository';
import { QuestionRepository } from 'src/common/repository/question.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Answer,
      PatientAnswer,
      Question,
      Patient,
      AnswerRepository,
      PatientRepository,
      QuestionRepository,
      PatientRepository
    ]),
  ],
  providers: [AnswerService],
  controllers: [AnswerController],
  exports: [AnswerService],
})
export class AnswerModule {}
