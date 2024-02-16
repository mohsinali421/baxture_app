import { Request, Response } from "express";
import { User } from "../models/users";
import mongoose from "mongoose";

export const updateUserController = async (req: Request, res: Response) => {
  // to update existing user’s data
  try {
    const userId = req.params.userId;
    const { username, age, hobbies } = req.body;
    const user = await User.findByIdAndUpdate(
      {
        _id: new mongoose.Types.ObjectId(userId),
      },
      {
        username,
        age,
        hobbies,
      },
      {
        new: true,
      }
    );
    return res.status(200).json({
      message: "User Updated",
      user,
    });
  } catch (error: any) {
    console.error(error);
    return res.status(400).json({
      error: "unable to process request",
    });
  }
};
