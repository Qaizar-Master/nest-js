import { ForbiddenException, HttpStatus, Injectable, NestMiddleware, Optional } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export function userAgent(req: Request, res: Response, next : NextFunction){
    const ua = req.header["user-agent"];

    console.log(ua);

    req["ua"] = ua;

    res.json({success: true, ua})
    // next();
}

export class UserAgentOptions{
    accepted? : string[];
}

@Injectable()
export class UserAgentMiddleware implements NestMiddleware{
    constructor(@Optional() private options: UserAgentOptions){}

    use(req: Request, res: Response, next : NextFunction){
    const ua = req.header["user-agent"];

    if(!this.isUserAgentAcceptable(ua)){
        throw new ForbiddenException("Not Allowed!")
    }

    req["ua"] = ua;

    next();
    }


    private isUserAgentAcceptable(userAgent: string){
        const acceptedUserAgents = this.options?.accepted || [];

        if(!acceptedUserAgents.length){
            return true;
        }

        return acceptedUserAgents.some((agent) => 
            userAgent.toLocaleLowerCase().includes(agent.toLocaleLowerCase())
        );
    }
}