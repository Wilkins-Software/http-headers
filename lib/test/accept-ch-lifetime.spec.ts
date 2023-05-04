import { AcceptCHLifetime } from "../src/accept-ch-lifetime.class";

describe("AcceptCHLifetime", () => {
  it("should build a valid AcceptCHLifetime header", () => {
    const acceptCHLifetime = new AcceptCHLifetime(86400);
    expect(acceptCHLifetime.build()).toBe("86400");
    expect(acceptCHLifetime.getHeadersObject()).toEqual({
      "Accept-CH-Lifetime": "86400",
    });
  });

  it("should set a valid AcceptCHLifetime header", () => {
    const acceptCHLifetime = new AcceptCHLifetime(86400);
    expect(acceptCHLifetime.setAcceptCHLifetime(3600).build()).toBe("3600");
  });
});
