import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TransactionService } from '../services/transaction.service';
import { SubmitTransactionDto } from '../dto/submit-transaction.dto';

@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  async submitTransaction(@Body() dto: SubmitTransactionDto) {
    return this.transactionService.submitTransaction(dto);
  }

  @Get(':id')
  async getTransaction(@Param('id') id: string) {
    return this.transactionService.getTransactionById(id);
  }
}
