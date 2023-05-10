import { Expect } from "../src/expect.class";

describe("EarlyData", () => {
  it("should build a valid EarlyData header", () => {
    const _expect = new Expect();
    expect(_expect.build()).toBe("100-continue");
  });
});
