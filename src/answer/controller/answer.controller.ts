import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { AnswerService } from '../services/answer.service';
import {
  SubmitAnswerDto,
  SubmitPatientAnswerDto,
} from '../dto/submit-answer.dto';

@Controller('answers')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Post()
  async createAnswer(@Body() createAnswerDto: SubmitAnswerDto) {
    return this.answerService.createAnswer(createAnswerDto);
  }

  @Post('submit')
  async submitPatientAnswer(@Body() submitDto: SubmitPatientAnswerDto) {
    return this.answerService.createAnswer(submitDto);
  }

  @Get('patient/:patientId')
  async getAnswersByPatient(@Param('patientId') patientId: string) {
    return this.answerService.getAnswersByPatient(patientId);
  }
}
