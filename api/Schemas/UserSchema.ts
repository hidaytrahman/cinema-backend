import { model, Schema, Model, Document } from "mongoose";

export interface IUser extends Document {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  created: { type: Date, default: new Date(), required: true },
  isPremium: { type: Boolean, default: false, required: false },
  updated: { type: Date, required: false },
  ratings: { type: Array, required: false },
});

// @ts-ignore
export const User: Model<IUser> = model("User", UserSchema);
