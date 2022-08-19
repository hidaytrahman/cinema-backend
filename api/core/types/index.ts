export type IMovieTypes = "film" | "series" | "movie";

export type IGenres = "drama";
export type IOtt = ("amazon_prime" | "netflix" | "zee5")[];

export type IPerson = {
  name: string;
  avatar?: string;
  country: string;
};

export type ICast = IPerson & {
  movies: [];
};

export type genres = "drama";
