import { ObjectId } from "mongoose";

export interface Entity {
  _id:  ObjectId;
}

export interface User extends Entity {
  name: string;
  email: string;
}

export type CreateUserInput = Omit<User, "_id">;
