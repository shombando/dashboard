import express, {Express, Request, Response} from "express";
const port = 9876;

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World from TS live");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})