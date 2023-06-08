import { ContentLanguage } from "../src/header-classes/content-language.class";

describe("ContentLanguage", () => {
  it("builds a ContentLanguage header", () => {
    const contentEncoding = new ContentLanguage("en", "ja", "it");
    expect(contentEncoding.build()).toBe("en, ja, it");
    contentEncoding.setContent("de-DE", "en-CA");
    expect(contentEncoding.getHeadersObject()).toEqual({
      "Content-Language": "de-DE, en-CA",
    });
  });
});
