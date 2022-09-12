import { Controller, Get } from "@nestjs/common";
import { GetQuestionsService } from "./getQuestions.service";

@Controller('game')
export class GetQuestionsController{
    constructor(private getQuestionsService: GetQuestionsService){ }

    @Get('getQuestions')
    getQuestions(){
        return this.getQuestionsService.getQuestions();
    }
    // @Post('getHint')
    // gethint(){
    //     return this.getQuestionsService.getQuestions();
    // }
    // @Post('getAnswer')
    // getAnswer(){
    //     return this.getQuestionsService.getQuestions();
    // }
}