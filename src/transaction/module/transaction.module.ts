import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionRepository } from '../../common/repository/transaction.repository';
import { TransactionController } from '../controller/transaction.controller';
import { TransactionService } from '../services/transaction.service';
import { Transaction } from '../../common/entity/transaction.entity';
import { TransactionDetailsRepository } from 'src/common/repository/transaction-details.repository';
import { TransactionDetails } from '../../common/entity/transactionDetails.entity';
import { PatientRepository } from 'src/common/repository/patient.repository';
import { EhrRepository } from 'src/common/repository/ehr.repository';
import { AnswerRepository } from 'src/common/repository/answer.repository';
import { Patient } from 'src/common/entity/patient.entity';
import { EHR } from 'src/common/entity/ehr.entity';
import { Answer } from 'src/common/entity/answer.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Transaction,
      TransactionRepository,
      TransactionDetails,
      TransactionDetailsRepository,
      Patient,
      EHR,
      Answer,
      PatientRepository,
      EhrRepository,
      AnswerRepository
    ]),
  ],
  controllers: [TransactionController],
  providers: [TransactionService],
  exports: [TransactionService],
})
export class TransactionModule {}
