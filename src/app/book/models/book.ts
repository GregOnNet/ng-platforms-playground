export class Book {
  thumbnails: string;
  description: string;

  constructor(
    public title: string,
    public authors: string,
    public price: number
  ) {}
}
