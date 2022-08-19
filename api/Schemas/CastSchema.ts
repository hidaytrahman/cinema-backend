import { model, Schema, Model, Document, Types } from "mongoose";
import { ICast } from "../core/types";

export interface CastInterface extends ICast, Document {}

const CastSchema: Schema = new Schema({
  name: { type: String, required: true },
  avatar: { type: String, required: true },
  country: { type: String, required: true },
  created: { type: Date, default: new Date(), required: true },
  updated: { type: Date, required: false },
  movies: { type: Array, required: true },
});

// @ts-ignore
export const Cast: Model<CastInterface> = model("Cast", CastSchema);
