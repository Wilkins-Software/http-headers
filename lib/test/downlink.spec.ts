import { Downlink } from "../src/downlink.class";

describe("Downlink", () => {
  it("should build a valid Downlink header", () => {
    const downlink = new Downlink(1);
    expect(downlink.build()).toBe("1");
    downlink.setDownlink(2);
    expect(downlink.getHeadersObject()).toEqual({
      Downlink: "2",
    });
  });
});
