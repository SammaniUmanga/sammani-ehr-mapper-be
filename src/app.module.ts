import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { getEnvPath } from './common/config/env.helper';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnswerModule } from './answer/module/answer.module';
import { EHRMappingModule } from './ehr-mapping/modules/ehr-mapping.module';
import { PatientModule } from './patient/module/patient.module';
import { QuestionModule } from './question/module/question.module';
import { TransactionModule } from './transaction/module/transaction.module';
import { Question } from './common/entity/question.entity';
import { Patient } from './common/entity/patient.entity';
import { Answer, PatientAnswer } from './common/entity/answer.entity';
import { Transaction } from './common/entity/transaction.entity';
import { TransactionDetails } from './common/entity/transactionDetails.entity';
import { EHR } from './common/entity/ehr.entity';
import { EHRMapping } from './common/entity/ehrMapping.entity';

const envFilePath: string = getEnvPath(`./envFiles`);
console.log('envFilePath --->', envFilePath);

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath,
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: process.env.DB_POSTGRES_HOST,
        port: parseInt(process.env.DB_POSTGRES_PORT || '3306'),
        username: process.env.DB_POSTGRES_USER,
        password: process.env.DB_POSTGRES_PASSWORD,
        database: process.env.DB_POSTGRES_DATABASE,
        entities: [
          Question,
          Patient,
          Answer,
          PatientAnswer,
          Transaction,
          TransactionDetails,
          EHR,
          EHRMapping,
        ],
        synchronize: true,
      }),
    }),
    AnswerModule,
    EHRMappingModule,
    PatientModule,
    QuestionModule,
    TransactionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
