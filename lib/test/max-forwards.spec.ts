import { MaxForwards } from "../src/header-classes/max-forwards.class";

describe("MaxForwards", () => {
  it("should build a valid MaxForwards header", () => {
    const maxForwards = new MaxForwards(0);
    expect(maxForwards.build()).toBe("0");
    maxForwards.setMaxForwards(10);
    expect(maxForwards.getHeadersObject()).toEqual({
      "Max-Forwards": "10",
    });
  });
});
