import {
  Entity,
  Column,
  OneToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('question')
export class Question {
  @PrimaryGeneratedColumn('uuid')
  question_id: string;

  @Column()
  text_en: string;

  @Column()
  text_es: string;

  @Column()
  type: string;

  @Column()
  is_required: boolean;

  @Column()
  language_supported: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
