import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateEHRMappingDto {
  @IsUUID()
  @IsNotEmpty()
  ehrId: string;  // EHR system ID

  @IsUUID()
  @IsNotEmpty()
  questionId: string;  // ID of the associated question

  @IsUUID()
  @IsNotEmpty()
  answerId: string;  // ID of the associated answer

  @IsString()
  @IsNotEmpty()
  questionType: string;  // Type of the question (e.g., text, multiple choice)

  @IsString()
  @IsNotEmpty()
  ehrFieldName: string;  // Field name in the EHR system

  @IsString()
  @IsNotEmpty()
  apiEndpoint: string;  // API endpoint for EHR interaction
}
