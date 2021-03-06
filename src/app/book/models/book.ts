export class Book {
  thumbnails: string[];
  description: string;
  rating = 0;

  constructor(
    public isbn: string,
    public title: string,
    public authors: string[],
    public price: number
  ) {}

  rateUp() {
    this.rating++;
  }

  rateDown() {
    this.rating--;
  }
}
