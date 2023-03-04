export class Book {
  constructor(
    public book_id: number,
    public user_id: number,
    public title: string,
    public author: string,
    public price: number,
    public cover: string
  ) {}
}
