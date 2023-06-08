import { SecFetchDest } from "../src/header-classes/sec-fetch-dest.class";

describe("SecFetchDest", () => {
  it("builds a SecFetchDest header", () => {
    const dest = new SecFetchDest("frame");
    expect(dest.build()).toBe("frame");
    dest.setSecFetchDest("audioworklet");
    expect(dest.getHeadersObject()).toEqual({
      "Sec-Fetch-Dest": "audioworklet",
    });
  });
});
