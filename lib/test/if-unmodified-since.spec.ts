import { IfUnmodifiedSince } from "../src/header-classes/if-unmodified-since.class";

describe("IfUnmodifiedSince", () => {
  it("should build a valid IfUnmodifiedSince header", () => {
    const ifUnmodifiedSince = new IfUnmodifiedSince(
      "Wed, 20 May 2023 12:00:00 GMT"
    );
    expect(ifUnmodifiedSince.build()).toBe("Wed, 20 May 2023 12:00:00 GMT");
    ifUnmodifiedSince.setIfUnmodifiedSince("Wed, 21 Oct 2015 07:28:00 GMT");
    expect(ifUnmodifiedSince.getHeadersObject()).toEqual({
      "If-Unmodified-Since": "Wed, 21 Oct 2015 07:28:00 GMT",
    });
  });
});
