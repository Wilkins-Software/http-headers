import { AcceptRanges } from "../src/accept-ranges.class";

describe("AcceptRanges", () => {
  it("should build a valid AcceptRanges header", () => {
    const acceptRanges = new AcceptRanges("bytes");
    expect(acceptRanges.build()).toBe("bytes");
    expect(acceptRanges.getHeadersObject()).toEqual({
      "Accept-Ranges": "bytes",
    });
  });

  it("should set a valid AcceptRanges header", () => {
    const acceptRanges = new AcceptRanges("bytes");
    expect(acceptRanges.setAcceptRanges("none").build()).toBe("none");
  });
});
