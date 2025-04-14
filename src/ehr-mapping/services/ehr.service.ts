import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AnswerService } from 'src/answer/services/answer.service';
import { EHR } from '../../common/entity/ehr.entity';
import { EHRMapping } from '../../common/entity/ehrMapping.entity';
import { QuestionService } from 'src/question/services/question-service';
import { Repository } from 'typeorm';
import { CreateEHRMappingDto } from '../dto/create-ehr-mapping.dto';
import { CreateEHRDto } from '../dto/create-ehr.dto';

@Injectable()
export class EHRMappingService {
  constructor(
    @InjectRepository(EHRMapping)
    private ehrMappingRepository: Repository<EHRMapping>,
    @InjectRepository(EHR)
    private ehrRepository: Repository<EHR>,
    private readonly questionService: QuestionService,
    private readonly answerService: AnswerService,
  ) {}

  async findByEHRId(ehrId: string): Promise<EHRMapping[]> {
    const ehr = await this.ehrRepository.findOneOrFail({
      where: { ehr_id: ehrId },
    });
    return this.ehrMappingRepository.find({
      where: { ehr },
      relations: ['question', 'answer'],
    });
  }

  // New mapping for a specific EHR system
  async createMapping(
    ehrId: string,
    createEHRMappingDto: CreateEHRMappingDto,
  ): Promise<EHRMapping> {
    const ehr = await this.ehrRepository.findOneOrFail({
      where: { ehr_id: ehrId },
    });
    const question = await this.questionService.findById(
      createEHRMappingDto.questionId,
    );
    const answer = await this.answerService.findById(
      createEHRMappingDto.answerId,
    );

    const ehrMapping = this.ehrMappingRepository.create({
      ehr,
      question,
      answer,
      question_type: createEHRMappingDto.questionType,
      ehr_field_name: createEHRMappingDto.ehrFieldName,
      api_endpoint: createEHRMappingDto.apiEndpoint,
    });

    return this.ehrMappingRepository.save(ehrMapping);
  }

  async createEHR(createEHRDto: CreateEHRDto): Promise<EHR> {
    const ehr = this.ehrRepository.create({
      name: createEHRDto.name,
      description: createEHRDto.description,
    });

    return this.ehrRepository.save(ehr);
  }
}
