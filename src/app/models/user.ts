export class User {
  constructor(
    private _id: number,
    private _name: string,
    private _surname: string,
    private _email: string,
    private _url: string
  ) {}

  // Getters
  public get user_id() {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get surname(): string {
    return this._surname;
  }

  public get email(): string {
    return this._email;
  }

  public get url(): string {
    return this._url;
  }

  // Setters
/*   public set user_id(id: number) {
    this._id = id;
  } */

  public set name(name: string) {
    this._name = name;
  }

  public set surname(surname: string) {
    this._surname = surname;
  }

  public set email(email: string) {
    this._email = email;
  }

  public set url(url: string) {
    this._url = url;
  }
}

