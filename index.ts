import express, {Express, Request, Response} from "express";
const port = 9876;
const app: Express = express();

app.set('view engine', 'ejs');
//app.use(express.static(__dirname + '/public'));
//app.set('views', __dirname + '/views');

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

app.get("/", (req: Request, res: Response) => {
    res.render("index");
});

