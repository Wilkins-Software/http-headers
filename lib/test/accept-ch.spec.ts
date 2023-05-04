import { AcceptCH } from "../src/accept-ch-class";

describe("AcceptCH", () => {
  it("builds a AcceptCH header", () => {
    const acceptCH = new AcceptCH({
      "Viewport-Width": true,
      Width: true,
    });
    expect(acceptCH.build()).toBe("Viewport-Width, Width");
    expect(acceptCH.getHeadersObject()).toEqual({
      "Accept-CH": "Viewport-Width, Width",
    });
  });

  it("builds a AcceptCH header with *", () => {
    const acceptCH = new AcceptCH("*");
    expect(acceptCH.build()).toBe("*");
    expect(acceptCH.getHeadersObject()).toEqual({
      "Accept-CH": "*",
    });
  });
});
