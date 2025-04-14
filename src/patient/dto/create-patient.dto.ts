export class CreatePatientDto {
  name: string;
  gender: string;
  dob: Date;
  address: string;
  phone: string;
  email: string;
  emergency_contact: string;
  insurance_provider: string;
  insurance_policy_no: string;
  primary_physician: string;
}
