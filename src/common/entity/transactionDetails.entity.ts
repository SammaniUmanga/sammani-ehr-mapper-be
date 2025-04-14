import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Transaction } from './transaction.entity';
import { Answer } from './answer.entity';

@Entity('transaction_details')
export class TransactionDetails {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Transaction, txn => txn.details)
  transaction: Transaction;

  @ManyToOne(() => Answer)
  answer: Answer;
}