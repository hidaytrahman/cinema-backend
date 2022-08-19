import { Express, Request, Response } from "express";
import mongoose from "mongoose";
import { Cast, CastInterface } from "../../Schemas/CastSchema";

function CastRoute(app: Express) {
  app.get("/casts", async (req: Request, res: Response) => {
    const result = await Cast.find({});

    try {
      res.send({
        message: "Cast list",
        data: result,
      });
    } catch (error) {
      res.status(500).send(error);
    }
  });

  app.post("/cast", async (req: Request, res: Response) => {
    try {
      const cast: CastInterface = new Cast(req.body);
      await cast.save();

      res.status(200).json({
        message: "Cast added successfully!!!",
        data: cast,
      });
    } catch (err: any) {
      res.status(400).json({
        message: err.message,
        data: err,
      });
    }
  });

  app.delete("/cast/:id", async (req: Request, res: Response) => {
    try {
      const _id = mongoose.Types.ObjectId.createFromHexString(req.params.id);
      Cast.findOneAndDelete({ _id }, (err: any, docs: any) => {
        if (err) {
          res.status(400).json({
            message: err.message,
            data: err,
          });
        } else {
          if (docs) {
            res.status(200).json({
              message: "Cast is deleted",
              data: docs.title,
            });
          } else {
            res.status(200).json({
              message: "Cast doesn't exist",
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

export = CastRoute;
