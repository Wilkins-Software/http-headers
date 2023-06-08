import { TimingAllowOrigin } from "../src/header-classes/timing-allow-origin.class";

describe("TimingAllowOrigin", () => {
  it("should build a valid TimingAllowOrigin header", () => {
    const timingAllowOrigin = new TimingAllowOrigin("*");
    expect(timingAllowOrigin.build()).toBe("*");
    timingAllowOrigin.setTimingAllowOrigin("https://developer.mozilla.org");
    expect(timingAllowOrigin.getHeadersObject()).toEqual({
      "Timing-Allow-Origin": "https://developer.mozilla.org",
    });
  });
});
