import { AcceptPost } from "../src/header-classes/accept-post.class";

describe("AcceptPost", () => {
  it("should build a valid AcceptPost header", () => {
    const connection = new AcceptPost("application/example, text/example");
    expect(connection.build()).toBe("application/example, text/example");
    expect(connection.getHeadersObject()).toEqual({
      "Accept-Post": "application/example, text/example",
    });
  });

  it("should set a valid AcceptPost header", () => {
    const connection = new AcceptPost("application/example, text/example");
    expect(connection.setAcceptPost("*/*").build()).toBe("*/*");
  });
});
