import { Request, Response } from "express";
import * as itemService from "../services/item.service";

export const GetItems = async (req: Request, res: Response) => {
  const result = await itemService.GetItems();

  if (result[0] === 200) {
    res.cookie("update_items", false, { maxAge: 3 * 3600 * 1000 });
    res.status(200).send(result[1]);
  } else {
    res.status(result[0]).send(result[1]);
  }
};
