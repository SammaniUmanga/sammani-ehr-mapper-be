import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('translation')
export class Translation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  entity_type: 'question' | 'answer';

  @Column()
  entity_id: string;

  @Column()
  language: string;

  @Column()
  translated_text: string;
}
