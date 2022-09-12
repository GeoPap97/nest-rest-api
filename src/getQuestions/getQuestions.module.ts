import { Module } from '@nestjs/common';
import { GetQuestionsController } from './getQuestions.controller';
import { GetQuestionsService } from './getQuestions.service';

@Module({
    controllers: [GetQuestionsController],
    providers: [GetQuestionsService],
})
export class GetQuestionsModule {}