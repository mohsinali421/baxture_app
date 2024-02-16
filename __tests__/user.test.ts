import app from "../index";
import mongoose from "mongoose";
import request from "supertest";
import dotenv from "dotenv";

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const database = process.env.TEST_DATABASE;

beforeAll(async () => {
  await mongoose.connection.close();
  await mongoose.connect(
    `mongodb+srv://${username}:${password}@production.goiveu9.mongodb.net/${database}?retryWrites=true&w=majority`
  );
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("user test cases", () => {
  it("should return all users", async () => {
    const res = await request(app).get("/api/users");
    expect(res.statusCode).toBe(200);
  });
  it("should return users by id", async () => {
    const res = await request(app).get("/api/users/65cf0485178f3666db8dd741");
    expect(res.statusCode).toBe(200);
  });
  it("should return save user", async () => {
    const res = await request(app)
      .post("/api/users")
      .send({
        username: "Nisht",
        age: 27,
        hobbies: ["badminton", "table tennis"],
      });
    expect(res.statusCode).toBe(201);
  });
  it("should update a user", async () => {
    const res = await request(app)
      .put("/api/users/65cf0485178f3666db8dd741")
      .send({
        username: "Nisht",
        age: 27,
        hobbies: ["badminton", "table tennis"],
      });
    expect(res.statusCode).toBe(200);
  });
  it("should delete a user", async () => {
    const res = await request(app)
      .delete("/api/users/65cf0485178f3666db8dd741");
    expect(res.statusCode).toBe(200);
  });
  it("should delete all user", async () => {
    const res = await request(app)
      .delete("/api/users")
    expect(res.statusCode).toBe(200);
  });
});
function sum(a: number, b: number) {
  return a + b;
}
