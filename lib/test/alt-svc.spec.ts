import { AltSvc } from "../src/header-classes/alt-svc.class";

describe("AltSvc", () => {
  it("builds a AltSvc header", () => {
    const alt = new AltSvc();
    expect(alt.build()).toBe("");
    expect(alt.getHeadersObject()).toEqual({
      "Alt-Svc": "",
    });
  });

  it("builds valid setter AltSvc header", () => {
    const alt = new AltSvc();
    alt.setProtocalIdAuthority("h2", ":443");
    alt.setMaxAge(2592000);
    expect(alt.build()).toBe(`h2=":443"; ma=2592000;`);
    alt.setPersist(1);
    expect(alt.getHeadersObject()).toEqual({
      "Alt-Svc": `h2=":443"; ma=2592000; persist=1`,
    });
    alt.setClear(true);
    expect(alt.build()).toBe("clear");
  });
});
