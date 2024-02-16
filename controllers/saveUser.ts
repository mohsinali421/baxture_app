import { Request, Response } from "express";
import { User } from "../models/users";
import mongoose from "mongoose";

export const saveUserController = async (req: Request, res: Response) => {
  // to create record about new user and store it in database
  try {
    const { username, age, hobbies } = req.body;
    const user = await new User({
      username,
      age,
      hobbies,
    }).save();
    return res.status(201).json({
      message: "User saved successfully !",
      _id: user._id,
    });
  } catch (error: any) {
    console.error(error);
    return res.status(400).json({
      error: "unable to process request",
    });
  }
};
