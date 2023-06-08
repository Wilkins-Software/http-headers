import { IfModifiedSince } from "../src/header-classes/if-modified-since.class";

describe("IfModifiedSince", () => {
  it("should build a valid IfModifiedSince header", () => {
    const date = new IfModifiedSince("Wed, 20 May 2023 12:00:00 GMT");
    expect(date.build()).toBe("Wed, 20 May 2023 12:00:00 GMT");
    date.setDate("Wed, 21 Oct 2015 07:28:00 GMT");
    expect(date.getHeadersObject()).toEqual({
      "If-Modified-Since": "Wed, 21 Oct 2015 07:28:00 GMT",
    });
  });
});
