import express from "express";

const app = express();

function loggerMiddleware(request: express.Request, response: express.Response, next:any){
    console.log(`${new Date()} ${request.method} ${request.path}`);
    next();
}
app.use(loggerMiddleware);

app.get('/', (request, response) => {
    response.send("Hello Parser");
});

app.listen(5000, ()=> {
    console.log('Server listening on port 5000');
});
