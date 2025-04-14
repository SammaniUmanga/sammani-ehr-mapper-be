import {
  Entity,
  Column,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Patient } from './patient.entity';
import { EHR } from './ehr.entity';
import { TransactionDetails } from './transactionDetails.entity';

@Entity('transaction')
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  txn_id: string;

  @ManyToOne(() => Patient, (patient) => patient.transactions)
  patient: Patient;

  @ManyToOne(() => EHR, (ehr) => ehr.transactions)
  ehr: EHR;

  @Column()
  timestamp: Date;

  @Column()
  status: string;

  @Column({ nullable: true })
  error_message: string;

  @Column({ default: 0 })
  retry_count: number;

  @Column({ nullable: true })
  submitted_by: string;

  @Column({ nullable: true })
  duration_ms: number;

  @OneToMany(() => TransactionDetails, (td) => td.transaction)
  details: TransactionDetails[];
}
