import { ContentType } from "../src/content-type.class";

describe("ContentType", () => {
  it("should build a valid ContentType header", () => {
    const contentType = new ContentType("application/json");
    expect(contentType.build()).toBe("application/json");
  });

  it("should build a valid ContentType header type", () => {
    const contentType = new ContentType("application/json");
    expect(contentType.getHeadersObject()).toEqual({
      ContentType: "application/json",
    });
  });
});
