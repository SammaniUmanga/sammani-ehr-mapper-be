export class SubmitTransactionDto {
  patientId: string;
  ehrId: string;
  answers: { answerId: string }[];
  submitted_by?: string;
}
