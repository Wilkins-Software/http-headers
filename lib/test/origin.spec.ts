import { Origin } from "../src/origin.class";

describe("Origin", () => {
  it("builds a Origin header", () => {
    const origin = new Origin("https://developer.mozilla.org");
    expect(origin.build()).toBe("https://developer.mozilla.org");
    origin.setOrigin("http://developer.mozilla.org:80");
    expect(origin.getHeadersObject()).toEqual({
      Origin: "http://developer.mozilla.org:80",
    });
  });
});
