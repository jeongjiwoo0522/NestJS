class CreateMovieDto { // data transfer object 
  public readonly title: string;
  public readonly year: number;
  public readonly genres: string[];
}

export { CreateMovieDto }