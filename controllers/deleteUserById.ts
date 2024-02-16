import { Request, Response } from "express";
import { User } from "../models/users";
import mongoose from "mongoose";

export const deleteUserByIdController = async (req: Request, res: Response) => {
  // to delete existing user from database
  try {
    const userId = req.params.userId;
    await User.findByIdAndDelete({
      _id: new mongoose.Types.ObjectId(userId),
    });
    return res.status(200).json({
      message: "User Deleted Successfully !",
    });
  } catch (error: any) {
    console.error(error);
    return res.status(400).json({
      error: "unable to process request",
    });
  }
};
