import { CacheControlHeader } from "../src/header-classes/cache-control.class";

describe("getters and setters", () => {
  it("Sets private to the opposite of public", () => {
    const cacheControl = new CacheControlHeader({});
    cacheControl.setIsPrivate(false);
    expect(cacheControl.getIsPublic()).toBe(true);
    cacheControl.setIsPublic(false);
    expect(cacheControl.getIsPrivate()).toBe(true);
  });

  it("Sets public to the opposite of private", () => {
    const cacheControl = new CacheControlHeader({});
    cacheControl.setIsPublic(false);
    expect(cacheControl.getIsPrivate()).toBe(true);
    cacheControl.setIsPrivate(false);
    expect(cacheControl.getIsPublic()).toBe(true);
  });
});

describe("build", () => {
  it("builds a cache control header", () => {
    const cacheControl = new CacheControlHeader({
      isPublic: false,
      isPrivate: true,
      maxAge: 3600,
      sharedMaxAge: 3600,
    });
    expect(cacheControl.build()).toBe("max-age=3600, s-maxage=3600, private");
  });
});

describe("static", () => {
  it("builds a cache control header", () => {
    expect(CacheControlHeader.noCache().getHeadersObject()).toEqual({
      "Cache-Control": "no-cache",
    });
  });
});

describe("Max-age time converters", () => {
  it("allows you to use a built in time converter to set max-age (method)", () => {
    const cacheControl = new CacheControlHeader({});
    cacheControl.setMaxAge(({ minutes }) => minutes(1));
    expect(cacheControl.build()).toBe("max-age=60");
  });

  it("allows you to use a built in time converter to set max-age (constructor)", () => {
    const cacheControl = new CacheControlHeader({
      maxAge: ({ minutes }) => minutes(1),
    });
    expect(cacheControl.build()).toBe("max-age=60");
  });
});
