import { ETag } from "../src/header-classes/etag.class";

describe("ETag", () => {
  it("should build a valid ETag header", () => {
    const ect = new ETag("33a64df551425fcc55e4d42a148795d9f25f89d4");
    expect(ect.build()).toBe("33a64df551425fcc55e4d42a148795d9f25f89d4");
    ect.setETag(`W/"0815"`);
    expect(ect.getHeadersObject()).toEqual({
      ETag: `W/"0815"`,
    });
  });
});
