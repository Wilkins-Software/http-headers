import { RTT } from "../src/header-classes/rtt.class";

describe("RTT", () => {
  it("should build a valid RTT header", () => {
    const rTT = new RTT(100);
    expect(rTT.build()).toBe("100");
    rTT.setRTT(150);
    expect(rTT.getHeadersObject()).toEqual({
      RTT: "150",
    });
  });
});
