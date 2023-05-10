import { ECT } from "../src/ect.class";

describe("ECT", () => {
  it("should build a valid ECT header", () => {
    const ect = new ECT("slow-2g");
    expect(ect.build()).toBe("slow-2g");
    ect.setECT("3g");
    expect(ect.getHeadersObject()).toEqual({
      ECT: "3g",
    });
  });
});
