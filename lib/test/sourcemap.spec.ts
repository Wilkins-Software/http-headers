import { SourceMap } from "../src/header-classes/sourcemap.class";

describe("SourceMap", () => {
  it("should build a valid SourceMap header", () => {
    const sourceMap = new SourceMap("/path/to/file.js.map");
    expect(sourceMap.build()).toBe("/path/to/file.js.map");
    sourceMap.setSourceMap("/path/to/test.js.map");
    expect(sourceMap.getHeadersObject()).toEqual({
      SourceMap: "/path/to/test.js.map",
    });
  });
});
