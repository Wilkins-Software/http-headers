import { AcceptRanges } from "../src/accept-ranges.class";

describe("AcceptRanges", () => {
  it("should build a valid AcceptRanges header", () => {
    const connection = new AcceptRanges("bytes");
    expect(connection.build()).toBe("bytes");
    expect(connection.getHeadersObject()).toEqual({
      "Accept-Ranges": "bytes",
    });
  });

  it("should set a valid AcceptRanges header", () => {
    const connection = new AcceptRanges("bytes");
    expect(connection.setAcceptRanges("none").build()).toBe("none");
  });
});
