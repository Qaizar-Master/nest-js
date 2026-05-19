import { Controller, Get, Param, ParseIntPipe, Post, Put, Req } from '@nestjs/common';

@Controller('jobs')
export class JobsController {
    @Get("refs")
    findJobRefs(@Req() req : Request){
        console.log(req["ua"]);
        return {success : true, message : "Job refs list"};
    }

    @Post("refs")
    createJobRef(){
        return {success : true, message : "Job refs created"}
    }

    @Put(":jobId")
    updateJobId(@Param("jobId", ParseIntPipe) jobId : number){
        return {success : true, jobId, message : "Job updated"}
    }
}
