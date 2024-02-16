import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const validation_user_schema = Joi.object({
  username: Joi.string().alphanum().max(25).trim().required(),
  age: Joi.number().max(99).required(),
  hobbies: Joi.array().default([]),
});

export const JoiSchemaValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await validation_user_schema.validateAsync(req.body);
    next();
  } catch (err: any) {
    console.error("Error in joi schema ", err);
    return res.status(400).json({
      error: "Error in Schema Validation",
      message: err.details[0].message,
    });
  }
};
