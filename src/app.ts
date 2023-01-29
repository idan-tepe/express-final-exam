import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import bmi from "./bmi";
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/bmi", (req: Request, res: Response) => {
  const data = req.body;
  const userBmi = bmi(data);
  res.send(userBmi);
});

app.get("/bmi", (req: Request, res: Response) => {
  const weight = Number(req.params.weight);
  const weightUnit = Number(req.params.weightUnit);
  const height = Number(req.params.height);
  const heightUnit = Number(req.params.heightUnit);
  const userBmi = bmi({ weight, weightUnit, height, heightUnit });
  res.send(userBmi);
});

export default app;
