import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { EHR } from './ehr.entity';
import { Question } from './question.entity';
import { Answer } from './answer.entity';

@Entity('ehr_mapping')
export class EHRMapping {
  @PrimaryGeneratedColumn('uuid')
  mapping_id: number;

  @ManyToOne(() => EHR, (ehr) => ehr.mappings)
  ehr: EHR;

  @ManyToOne(() => Question)
  question: Question;

  @ManyToOne(() => Answer)
  answer: Answer;

  @Column()
  question_type: string;

  @Column()
  ehr_field_name: string;

  @Column()
  api_endpoint: string;

  @CreateDateColumn()
  created_at: Date;
  
  @UpdateDateColumn()
  updated_at: Date;
  
}
