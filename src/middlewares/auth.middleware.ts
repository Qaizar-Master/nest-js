// for multiple middlewares to be added to the routes.

import { Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

function VerifyJwtToken(token : string){
    return true;
    // here verification logic needs to be written,
    // currently for just demo purposes not written.
}

@Injectable()
export class AuthMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next : NextFunction){
        const token = req.headers.authorization?.split(" ")[1];  

        // auth logic:
        if (token && VerifyJwtToken(token)){
            next();
            return;
        }
        
        throw new UnauthorizedException();
        // immediately terminates the current request handling and
        // returns an HTTP 401 Unauthorized response to the client.

    }
}