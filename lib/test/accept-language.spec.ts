import { AcceptLanguage } from "../src/accept-language.class";

describe("AcceptLanguage", () => {
  it("builds a AcceptLanguage header", () => {
    // There are two types of header function input values: boolean and numeric. So if type is boolean and true it will be just returned without quality property. So it is actually equal to 1 or 1.0 as a number type.
    const acceptLanguage = new AcceptLanguage({
      "en-US": true,
      en: 0.5,
    });
    expect(acceptLanguage.build()).toBe("en-US, en;q=0.5");
    expect(acceptLanguage.getHeadersObject()).toEqual({
      "Accept-Language": "en-US, en;q=0.5",
    });
  });

  it("builds valid setter AcceptLanguage header", () => {
    const acceptLanguage = new AcceptLanguage({
      "en-US": true,
      en: 0.5,
    });
    acceptLanguage.setProperty("en-US", 0.8);
    expect(acceptLanguage.build()).toBe("en-US;q=0.8, en;q=0.5");

    acceptLanguage.setAllProperty({
      de: 0.1,
      "de-CH": 0.2,
    });
    expect(acceptLanguage.getHeadersObject()).toEqual({
      "Accept-Language": "de;q=0.1, de-CH;q=0.2",
    });
  });

  it("builds a AcceptLanguage header with *", () => {
    const acceptLanguage = new AcceptLanguage("*");
    expect(acceptLanguage.build()).toBe("*");
    expect(acceptLanguage.getHeadersObject()).toEqual({
      "Accept-Language": "*",
    });
  });
});
