import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Patient } from 'src/common/entity/patient.entity';
import { PatientRepository } from 'src/common/repository/patient.repository';
import { CreatePatientDto } from 'src/patient/dto/create-patient.dto';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient)
    private readonly patientRepo: PatientRepository,
  ) {}

  async createPatient(dto: CreatePatientDto) {
    const patient = this.patientRepo.create(dto);
    return this.patientRepo.save(patient);
  }

  async getPatientById(id: string) {
    return this.patientRepo.findOne({ where: { id }, relations: ['answers', 'transactions'] });
  }
}
