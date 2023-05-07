import { EarlyData } from "../src/early-data.class";

describe("EarlyData", () => {
  it("should build a valid EarlyData header", () => {
    const data = new EarlyData();
    expect(data.build()).toBe("1");
  });
});
