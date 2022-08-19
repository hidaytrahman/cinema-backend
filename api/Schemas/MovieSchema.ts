import { model, Schema, Model, Document, Types } from "mongoose";
import { ICast, IGenres, IMovieTypes, IOtt } from "../core/types";

export interface IMovie extends Document {
  title: string;
  description: string;
  avatar: string;
  type: IMovieTypes;
  episodes?: number;
  releaseDate: Date;
  genres: IGenres[];
  rating?: number;
  stars: ICast[];
  writers?: ICast[];
  director: ICast;
  date: Date;
  ott: IOtt[];
}

const MovieSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  avatar: { type: String, required: true },
  type: { type: String, required: true },
  episodes: { type: Number, required: false },
  releaseDate: { type: Date, required: true },
  genres: { type: Array, required: true },
  rating: { type: Number, required: false },
  stars: { type: Array, required: true },
  writers: { type: Array, required: false },
  director: { type: Object, required: true },
  created: { type: Date, default: new Date(), required: true },
  updated: { type: Date, required: false },
  ott: { type: Array, required: true },
});

// @ts-ignore
export const Movie: Model<IMovie> = model("Movie", MovieSchema);
