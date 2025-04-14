import { Entity, Column, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { Transaction } from './transaction.entity';
import { EHRMapping } from './ehrMapping.entity';

@Entity('ehr')
export class EHR {
  @PrimaryGeneratedColumn('uuid')
  ehr_id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Transaction, (txn) => txn.ehr)
  transactions: Transaction[];

  @OneToMany(() => EHRMapping, (mapping) => mapping.ehr)
  mappings: EHRMapping[];
}
