import express from "express";
export const loggerMiddleware:any = (request: express.Request, response: express.Response, next:any) => {
        console.log(`${new Date()} ${request.method} ${request.path}`);
        next();
}
