import {UserModel} from "./user.model";

export class UserResponseModel {

  public page: number;

  public per_page: number;

  public total_pages: number;

  public data: Array<UserModel>;

  constructor(page: number, per_page: number, total_pages: number, data: Array<UserModel>) {
    this.page = page;
    this.per_page = per_page;
    this.total_pages = total_pages;
    this.data = data;
  }

}
