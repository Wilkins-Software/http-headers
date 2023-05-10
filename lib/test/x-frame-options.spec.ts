import { XFrameOptions } from "../src/x-frame-options.class";

describe("XFrameOptions", () => {
  it("builds a XFrameOptions header", () => {
    const options = new XFrameOptions("SAMEORIGIN");
    expect(options.build()).toBe("SAMEORIGIN");
    options.setXFrameOptions("ALLOW-FROM origin");
    expect(options.getHeadersObject()).toEqual({
      "X-Frame-Options": "ALLOW-FROM origin",
    });
  });
});
