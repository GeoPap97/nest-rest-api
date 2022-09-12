import { Body, Controller, Get, Post } from "@nestjs/common";
import { GetQuestionsService } from "./getQuestions.service";

@Controller('game')
export class GetQuestionsController{
    constructor(private getQuestionsService: GetQuestionsService){ }

    @Get('getQuestions')
    getQuestions(){
        return this.getQuestionsService.getQuestions();
    }
    @Post('getHint')
    gethint(@Body() hint){
        return this.getQuestionsService.getHint(hint);
    }
    @Post('getAnswer')
    getAnswer(@Body() ans){
        return this.getQuestionsService.getAnswer(ans);
    }
}