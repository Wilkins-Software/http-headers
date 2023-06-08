import { Connection } from "../src/header-classes/connection.class";

describe("Connection", () => {
  it("should build a valid Connection header", () => {
    const connection = new Connection("keep-alive");
    expect(connection.build()).toBe("keep-alive");
  });

  it("should set a valid Connection header", () => {
    const connection = new Connection("keep-alive");
    expect(connection.setConnection("close").build()).toBe("close");
  });

  it("should build a valid Connection header type", () => {
    const connection = new Connection("keep-alive");
    expect(connection.getHeadersObject()).toEqual({
      Connection: "keep-alive",
    });
  });
});
