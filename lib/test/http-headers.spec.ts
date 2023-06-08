import { HttpHeaders } from "../src/http-headers.class";

describe("HttpHeaders", () => {
  describe('When the "Cache-Control" property header is configured', () => {
    it('Returns an object with the "Cache-Control" property (1 setting)', () => {
      const headers = new HttpHeaders({
        "Cache-Control": (builder) => builder.setImmutable(true),
      });

      expect(headers.getHeadersObject()).toEqual({
        "Cache-Control": "immutable",
      });
    });

    it('Returns an object with the "Cache-Control" property (multiple settings)', () => {
      const headers = new HttpHeaders({
        "Cache-Control": (builder) =>
          builder.setImmutable(true).setIsPublic(true).setMaxAge(3600),
      });

      expect(headers.getHeadersObject()).toEqual({
        "Cache-Control": "max-age=3600, public, immutable",
      });
    });
  });

  describe('When the "Age" property header is configured', () => {
    it('Returns an object with the "Age" property', () => {
      const headers = new HttpHeaders({
        Age: (builder) => builder.setAge(123),
      });

      expect(headers.getHeadersObject()).toEqual({
        Age: "123",
      });
    });
  });

  describe("When multiple header properties are set", () => {
    it("Correctly formats both age and cache control", () => {
      const headers = new HttpHeaders({
        Age: (builder) => builder.setAge(123),
        "Cache-Control": (builder) =>
          builder.setImmutable(true).setIsPublic(true).setMaxAge(3600),
      });

      expect(headers.getHeadersObject()).toEqual({
        Age: "123",
        "Cache-Control": "max-age=3600, public, immutable",
      });
    });
  });

  it("Correctly formats all three of age, clear-site-data, and cache control", () => {
    const headers = new HttpHeaders({
      Age: (builder) => builder.setAge(123),
      "Cache-Control": (builder) =>
        builder
          .setImmutable(true)
          .setIsPublic(true)
          .setMaxAge(({ hours }) => hours(1)),
      "Clear-Site-Data": (builder) => builder.setDirective("cache", true),
    });

    expect(headers.getHeadersObject()).toEqual({
      Age: "123",
      "Cache-Control": "max-age=3600, public, immutable",
      "Clear-Site-Data": "cache",
    });
  });

  describe('When the "Expires" property header is configured', () => {
    it('Returns an object with the "Expires" property', () => {
      const headers = new HttpHeaders({
        Expires: (builder) => builder.setExpiry(new Date(Date.UTC(2020, 0, 1))),
      });

      expect(headers.getHeadersObject()).toEqual({
        Expires: "Wed, 01 Jan 2020 00:00:00 GMT",
      });
    });
  });
});
