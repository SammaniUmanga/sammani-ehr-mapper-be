import { forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SubmitTransactionDto } from '../dto/submit-transaction.dto';
import { TransactionRepository } from 'src/common/repository/transaction.repository';
import { PatientRepository } from 'src/common/repository/patient.repository';
import { EhrRepository } from 'src/common/repository/ehr.repository';
import { AnswerRepository } from 'src/common/repository/answer.repository';
import { TransactionDetails } from '../../common/entity/transactionDetails.entity';
import { Repository } from 'typeorm';
import { Patient } from 'src/common/entity/patient.entity';
import { EHR } from 'src/common/entity/ehr.entity';
import { Answer } from 'src/common/entity/answer.entity';
import { Transaction } from 'src/common/entity/transaction.entity';


@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private readonly txnRepo: TransactionRepository,

    @InjectRepository(TransactionDetails)
    private txnDetailsRepo: Repository<TransactionDetails>,

    @InjectRepository(Patient)
    private readonly patientRepo: PatientRepository,

    @InjectRepository(EHR)
    private readonly ehrRepo: EhrRepository,

    @InjectRepository(Answer)
    private readonly answerRepo: AnswerRepository,
  ) {}

  async submitTransaction(dto: SubmitTransactionDto) {
    const patient = await this.patientRepo.findOne({ where: { id: dto.patientId } });
    if (!patient) throw new NotFoundException('Patient not found');

    const ehr = await this.ehrRepo.findOne({ where: { ehr_id: dto.ehrId } });
    if (!ehr) throw new NotFoundException('EHR system not found');

    const txn = this.txnRepo.create({
      patient,
      ehr,
      timestamp: new Date(),
      status: 'pending',
    });
    const savedTxn = await this.txnRepo.save(txn);

    const txnDetails = await Promise.all(
      dto.answers.map(async ({ answerId }) => {
        // Ensure the answerId is a string and not an object
        const answerIdStr = answerId.toString();
    
        const answer = await this.answerRepo.findOne({ where: { answer_id: answerIdStr } });
        if (!answer) throw new NotFoundException(`Answer not found: ${answerIdStr}`);
    
        return this.txnDetailsRepo.save(
          this.txnDetailsRepo.create({ transaction: savedTxn, answer }),
        );
      }),
    );

    return { transaction: savedTxn, details: txnDetails };
  }

  async getTransactionById(id: string) {
    const txn = await this.txnRepo.findWithDetails(id);
    if (!txn) throw new NotFoundException('Transaction not found');

    return txn;
  }
}
