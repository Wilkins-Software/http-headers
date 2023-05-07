import { EarlyData } from "../src/early-data.class";

describe("EarlyData", () => {
  it("should build a valid EarlyData header", () => {
    const downlink = new EarlyData();
    expect(downlink.build()).toBe("1");
  });
});
