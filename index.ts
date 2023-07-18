import express, {Express, Request, Response} from "express";
const port = 9876;
const app: Express = express();

app.set('view engine', 'ejs');

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

app.get("/", (req: Request, res: Response) => {
    res.render("index");
});

