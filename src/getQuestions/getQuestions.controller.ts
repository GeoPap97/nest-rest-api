import { Body, Controller, Get, Post } from "@nestjs/common";
import { GetQuestionsService } from "./getQuestions.service";

@Controller('game')
export class GetQuestionsController{
    constructor(private getQuestionsService: GetQuestionsService){ }

    @Get('getQuestions')
    getQuestions(){
        console.log()
        return this.getQuestionsService.getQuestions();
    }
    @Post('getHint')
    getHint(@Body() hint){
        console.log(hint);
        return this.getQuestionsService.getHint(hint);
    }
    @Post('getAnswer')
    getAnswer(@Body() ans){
        //console.log(ans);
        return this.getQuestionsService.getAnswer(ans);
    }
}