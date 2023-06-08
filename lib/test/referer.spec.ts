import { Referer } from "../src/header-classes/referer.class";

describe("Referer", () => {
  it("should build a valid Referer header", () => {
    const referer = new Referer(
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    );
    expect(referer.build()).toBe(
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    );
    referer.setReferer("https://example.com/page?q=123");
    expect(referer.getHeadersObject()).toEqual({
      Referer: "https://example.com/page?q=123",
    });
  });
});
