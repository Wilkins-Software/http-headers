import { ContentEncoding } from "../src/header-classes/content-encoding.class";

describe("ContentEncoding", () => {
  it("builds a ContentEncoding header", () => {
    const contentEncoding = new ContentEncoding("deflate", "gzip");
    expect(contentEncoding.build()).toBe("deflate, gzip");
    contentEncoding.setContent("gzip", "compress");
    expect(contentEncoding.getHeadersObject()).toEqual({
      "Content-Encoding": "gzip, compress",
    });
  });
});
