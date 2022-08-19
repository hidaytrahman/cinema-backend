import { Express, Request, Response } from "express";
import mongoose from "mongoose";
import { IMovie, Movie } from "../../Schemas/MovieSchema";

function MoviesRoute(app: Express) {
  app.get("/movies", async (req: Request, res: Response) => {
    const movies = await Movie.find({});

    try {
      res.send({
        message: "movies list",
        data: movies,
      });
    } catch (error) {
      res.status(500).send(error);
    }
  });

  app.post("/movie", async (req: Request, res: Response) => {
    try {
      const movie: IMovie = new Movie(req.body);
      await movie.save();

      res.status(200).json({
        message: "movies saved successfullu",
        data: movie,
      });
    } catch (err: any) {
      res.status(400).json({
        message: err.message,
        data: err,
      });
    }
  });

  app.delete("/movie/:id", async (req: Request, res: Response) => {
    try {
      const _id = mongoose.Types.ObjectId.createFromHexString(req.params.id);
      Movie.findOneAndDelete({ _id }, (err: any, docs: any) => {
        if (err) {
          res.status(400).json({
            message: err.message,
            data: err,
          });
        } else {
          if (docs) {
            res.status(200).json({
              message: "Movie is deleted",
              data: docs.title,
            });
          } else {
            res.status(200).json({
              message: "Movie doesn't exist",
            });
          }
        }
      });
    } catch (err: any) {
      res.status(400).json({
        message: err.message,
        data: err,
      });
    }
  });
}

export = MoviesRoute;
