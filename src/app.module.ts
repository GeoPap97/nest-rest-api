import { Module } from "@nestjs/common";
import { GetQuestionsModule } from "./getQuestions/getQuestions.module";

@Module({
    imports: [GetQuestionsModule],
    
})
export class AppModule {}
