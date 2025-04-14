import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patient } from '../../common/entity/patient.entity';
import { PatientController } from '../controller/patient.controller';
import { PatientService } from '../services/patient.service';
import { PatientAnswer } from '../../common/entity/answer.entity';
import { PatientRepository } from 'src/common/repository/patient.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Patient, 
      PatientAnswer, 
      PatientRepository
    ]),
  ],
  controllers: [PatientController],
  providers: [PatientService],
  exports: [PatientService],
})
export class PatientModule {}
