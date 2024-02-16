import { Request, Response } from "express";
import { User } from "../models/users";
import mongoose from "mongoose";

export const deleteAllUserController = async (req: Request, res: Response) => {
  // to delete existing user from database
  try {
    await User.deleteMany({});
    return res.status(200).json({
      message: "All Users Deleted !!!",
    });
  } catch (error: any) {
    console.error(error);
    return res.status(400).json({
      error: "unable to process request",
    });
  }
};
