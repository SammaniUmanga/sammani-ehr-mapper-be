import { EntityRepository, Repository } from 'typeorm';
import { Patient } from '../../common/entity/patient.entity';

@EntityRepository(Patient)
export class PatientRepository extends Repository<Patient> {
  async createPatient(patientData: Partial<Patient>) {
    return this.save(patientData);
  }

  async findAllPatients() {
    return this.find();
  }

  async findPatientById(id: number) {
    return this.findOneBy({ id: id.toString() });
  }

  async findById(id: string){
    return this.findOne({ where: { id : id.toString()} });
  }
}
