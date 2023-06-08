import { BaseHeader } from "./base-header.class";

export class AcceptPost extends BaseHeader {
  protected _acceptPost: string;

  constructor(acceptPost: string) {
    super();
    this._acceptPost = acceptPost;
  }

  public getAcceptPost(): string {
    return this._acceptPost;
  }
  public setAcceptPost(acceptPost: string) {
    this._acceptPost = acceptPost;
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Accept-Post": this.build(),
    };
  }

  build(): string {
    return this.getAcceptPost().toString();
  }
}
