import { IfRange } from "../src/header-classes/if-range.class";

describe("IfRange", () => {
  it("should build a valid IfRange header", () => {
    const range = new IfRange("Wed, 20 May 2023 12:00:00 GMT");
    expect(range.build()).toBe("Wed, 20 May 2023 12:00:00 GMT");
    range.setIfRange("Wed, 21 Oct 2015 07:28:00 GMT");
    expect(range.getHeadersObject()).toEqual({
      "If-Range": "Wed, 21 Oct 2015 07:28:00 GMT",
    });
  });
});
