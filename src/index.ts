import express, { Request, Response } from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));

app.get("/test", (req: Request, res: Response) => {
  console.log(req.headers);
  
  res.send("Hello world! Your coffee might be cold, but your code is hot 🔥🔥🔥");
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));