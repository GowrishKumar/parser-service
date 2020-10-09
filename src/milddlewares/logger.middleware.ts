import express from "express";
export class LoggerMiddleware {
    public loggerMiddleware(request: express.Request, response: express.Response, next:any){
        console.log(`${new Date()} ${request.method} ${request.path}`);
        next();
    }
}
