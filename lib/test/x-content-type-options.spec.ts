import { XContentTypeOptions } from "../src/x-content-type-options.class";

describe("XContentTypeOptions", () => {
  it("builds a XContentTypeOptions header", () => {
    const options = new XContentTypeOptions();
    expect(options.build()).toBe("nosniff");
    expect(options.getHeadersObject()).toEqual({
      "X-Content-Type-Options": "nosniff",
    });
  });
});
