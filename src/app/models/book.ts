export class Book {
  constructor(
    public idBook: number,
    public id_user: number,
    public title: string,
    public author: string,
    public price: number,
    public photo: string
  ) {}
}
