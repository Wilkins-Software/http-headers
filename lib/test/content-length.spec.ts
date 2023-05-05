import { ContentLength } from "../src/content-length.class";

describe("ContentLength", () => {
  it("builds a ContentLength header", () => {
    const contentEncoding = new ContentLength(123);
    expect(contentEncoding.build()).toBe("123");
    contentEncoding.setLength(789);
    expect(contentEncoding.getHeadersObject()).toEqual({
      "Content-Length": "789",
    });
  });
});
