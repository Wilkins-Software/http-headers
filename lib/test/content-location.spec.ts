import { ContentLocation } from "../src/content-location.class";

describe("ContentLocation", () => {
  it("builds a ContentLocation header", () => {
    const contentLocation = new ContentLocation("/my-first-blog-post");
    expect(contentLocation.build()).toBe("/my-first-blog-post");
    contentLocation.setLocation("https://github.com/test");
    expect(contentLocation.getHeadersObject()).toEqual({
      "Content-Location": "https://github.com/test",
    });
  });
});
