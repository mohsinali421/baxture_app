import { Request, Response } from "express";
import { User } from "../models/users";
import mongoose from "mongoose";

export const getUserByIdController = async (req: Request, res: Response) => {
  // to get a specific user’s data
  try {
    console.log("Process id ", process.pid)
    const userId = req.params.userId;
    const user = await User.findOne({ _id: userId });
    return res.status(200).json({ user });
  } catch (error: any) {
    console.error(error);
    return res.status(400).json({
      error: "unable to process request",
    });
  }
};
