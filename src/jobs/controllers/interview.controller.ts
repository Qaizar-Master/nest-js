import { Controller, Get, Post } from "@nestjs/common";

@Controller("interview")
export class InterviewController{
    @Get()
    findInterviews(){
        return {success : true, message: "Interview List"};
    }

    @Post("schedule")
    scheduleInterview(){
        return { success: true, message : "Interview Scheduled"}
    }
} 