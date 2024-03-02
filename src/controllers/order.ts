import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";


const getItems = (req: Request, res: Response) => {
  try {
    res.send({
        data:"ESTO SOLO LO VE LAS PERSONS CON SESSION / JWT",
    });
  } catch (e) {
    handleHttp(res, "ERROR_GET_BLOGS");
  }
};


export {getItems};