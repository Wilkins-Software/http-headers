import { ContentType } from "../src/header-classes/content-type.class";

describe("ContentType", () => {
  it("should build a valid ContentType header", () => {
    const contentType = new ContentType("application/json");
    expect(contentType.build()).toBe("application/json");
  });

  it("should set a valid ContentType header", () => {
    const contentType = new ContentType("application/json");
    expect(contentType.setMimeType("image/gif").build()).toBe("image/gif");
  });

  it("should build a valid ContentType header type", () => {
    const contentType = new ContentType("application/json");
    expect(contentType.getHeadersObject()).toEqual({
      ContentType: "application/json",
    });
  });
});
