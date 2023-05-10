import { Vary } from "../src/vary.class";

describe("Vary", () => {
  it("builds a Vary header", () => {
    const vary = new Vary("*");
    expect(vary.build()).toBe("*");
    vary.setVary("Retry-After", "Save-Data");
    expect(vary.getHeadersObject()).toEqual({
      Vary: "Retry-After, Save-Data",
    });
  });
});
