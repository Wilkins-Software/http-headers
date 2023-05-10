import { Range } from "../src/range.class";

describe("Range", () => {
  it("builds a Range header", () => {
    const range = new Range(
      "bytes",
      {
        start: 200,
        end: 1000,
      },
      {
        start: 2000,
        end: 6576,
      }
    );
    expect(range.build()).toBe("bytes=200-1000, 2000-6576");
    range.setRange("bytes", {
      start: 0,
      end: 499,
      suffix: 500,
    });
    expect(range.getHeadersObject()).toEqual({
      Range: "bytes=0-499, -500",
    });
  });
});
