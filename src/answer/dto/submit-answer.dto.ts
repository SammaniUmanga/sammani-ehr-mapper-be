export class SubmitAnswerDto {
  patientId: string;
  questionId: string;
  answer_text: string;
  language: string;
}

export class SubmitPatientAnswerDto extends SubmitAnswerDto {
  answerId: string;
}
