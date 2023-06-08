import { Trailer } from "../src/header-classes/trailer.class";

describe("Trailer", () => {
  it("should build a valid Trailer header", () => {
    const trailer = new Trailer("Expires");
    expect(trailer.build()).toBe("Expires");
    expect(trailer.getHeadersObject()).toEqual({
      Trailer: "Expires",
    });
  });

  it("Allows you to construct the trailer with a builder function", () => {
    const trailer = new Trailer("");
    trailer.setTrailer("Expries");
    expect(trailer.build()).toBe("Expries");
  });
});
