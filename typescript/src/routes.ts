import { Request, Response } from "express";
import createUser from "./services/CreateUser";
export const helloWorld = (request: Request, response: Response) => {
  const user = createUser({
    name: "Julia Ramos",
    email: "oi@juliaramos.com.br",
    password: "hello",
  });
  response.json({ ...user, message: "Hello World" });
};
