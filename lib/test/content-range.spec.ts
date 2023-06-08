import { ContentRange } from "../src/header-classes/content-range.class";

describe("ContentRange", () => {
  it("builds a ContentRange header", () => {
    const contentRange = new ContentRange();
    expect(contentRange.build()).toBe("null");
    expect(contentRange.getHeadersObject()).toEqual({
      "Content-Range": "null",
    });
  });

  it("builds valid setter ContentRange header", () => {
    const contentRange = new ContentRange();
    contentRange.setUnit("bytes");
    contentRange.setAllRange(false);
    // It is very important setting. if you set this true, return value has "*" without care of range property
    contentRange.setRange(200, 1000);
    contentRange.setSize(67589);
    expect(contentRange.build()).toBe(`bytes 200-1000/67589`);

    contentRange.setAllRange(true);
    contentRange.setSize("*");
    expect(contentRange.getHeadersObject()).toEqual({
      "Content-Range": `bytes */*`,
    });
  });
});
