import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EHR } from '../../common/entity/ehr.entity';
import { EHRMapping } from '../../common/entity/ehrMapping.entity';
import { EhrMappingRepository } from 'src/common/repository/ehr-mapping.repository';
import { EhrRepository } from 'src/common/repository/ehr.repository';
import { EHRController } from '../controller/ehr-mapping.controller';
import { EHRMappingService } from '../services/ehr.service';
import { AnswerModule } from 'src/answer/module/answer.module';
import { QuestionModule } from 'src/question/module/question.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      EHR,
      EHRMapping,
      EhrRepository,
      EhrMappingRepository
    ]),
    QuestionModule,
    AnswerModule
  ],
  controllers: [EHRController],
  providers: [EHRMappingService],
  exports: [EHRMappingService],
})
export class EHRMappingModule {}
