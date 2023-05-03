import { Te } from "../src/te.class";

describe("Te", () => {
  it("builds a TE header", () => {
    const te = new Te({
      compress: true,
      deflate: true,
      gzip: true,
      trailers: true,
    });
    te.setTeQ(0.5);
    expect(te.build()).toBe("compress, deflate, gzip, trailers;q=0.5");
    expect(te.getHeadersObject()).toEqual({
      TE: "compress, deflate, gzip, trailers;q=0.5",
    });
  });

  it("builds a TE header with *", () => {
    const te = new Te("*");
    expect(te.build()).toBe("*");
    expect(te.getHeadersObject()).toEqual({
      TE: "*",
    });
  });
});
