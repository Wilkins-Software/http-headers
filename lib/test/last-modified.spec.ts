import { LastModified } from "../src/last-modified.class";

describe("LastModified", () => {
  it("should build a valid LastModified header", () => {
    const lastModified = new LastModified("Wed, 20 May 2023 12:00:00 GMT");
    expect(lastModified.build()).toBe("Wed, 20 May 2023 12:00:00 GMT");
    lastModified.setLastModified("Wed, 21 Oct 2015 07:28:00 GMT");
    expect(lastModified.getHeadersObject()).toEqual({
      "Last-Modified": "Wed, 21 Oct 2015 07:28:00 GMT",
    });
  });
});
