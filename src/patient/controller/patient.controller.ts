import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { PatientService } from '../services/patient.service';
import { CreatePatientDto } from '../dto/create-patient.dto';

@Controller('patients')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post('')
  create(@Body() dto: CreatePatientDto) {
    return this.patientService.createPatient(dto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patientService.getPatientById(id);
  }
}
