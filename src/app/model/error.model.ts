import {ErrorNested} from "./error.nested";

export class ErrorModel{

  public error:ErrorNested;

  constructor(error: ErrorNested) {
    this.error = error;
  }

}
