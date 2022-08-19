import { Express, Request, Response } from "express";
import MoviesRoute from "./Movies/MoviesRoute";
import CastRoute from "./Movies/CastRoute";

const Routes = (app: Express) => {
  MoviesRoute(app);
  CastRoute(app);
};

export = Routes;
