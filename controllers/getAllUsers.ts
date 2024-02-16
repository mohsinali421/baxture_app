import { Request, Response } from "express";
import { User } from "../models/users";
import mongoose from "mongoose";

export const getAllUsersController = async (req: Request, res: Response) => {
  // to get all users
  try {
    const users = await User.find({});
    return res.status(200).json({ users });
  } catch (error: any) {
    console.error(error);
    return res.status(400).json({
      error: "unable to process request",
    });
  }
};
