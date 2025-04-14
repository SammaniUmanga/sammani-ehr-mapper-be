import {
  Entity,
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
import { Patient } from './patient.entity';
import { Question } from './question.entity';

@Entity('answer')
export class Answer {
  @PrimaryGeneratedColumn('uuid')
  answer_id: string;

  @ManyToOne(() => Question)
  question: Question;

  @Column()
  answer_text: string;

  @Column()
  language: string;

  @Column()
  timestamp: Date;
}

@Entity('patient_answer')
export class PatientAnswer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Patient, (patient) => patient.answers)
  patient: Patient;

  @ManyToOne(() => Answer)
  answer: Answer;

  @CreateDateColumn()
  timestamp: Date;
}
