import {
  Entity,
  Column,
  OneToMany,
  UpdateDateColumn,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Answer, PatientAnswer } from './answer.entity';
import { Transaction } from './transaction.entity';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

@Entity('patient')
export class Patient extends BaseEntity {
  @Column()
  name: string;

  @Column()
  gender: string;

  @Column()
  dob: Date;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  emergency_contact: string;

  @Column()
  insurance_provider: string;

  @Column()
  insurance_policy_no: string;

  @Column()
  primary_physician: string;

  @OneToMany(() => PatientAnswer, (answer) => answer.patient)
  answers: PatientAnswer[];

  @OneToMany(() => Transaction, (txn) => txn.patient)
  transactions: Transaction[];
}
