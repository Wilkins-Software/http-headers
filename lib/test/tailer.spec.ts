import { Trailer } from "../src/trailer.class";

describe("Trailer", () => {
  it("should build a valid Trailer header", () => {
    const trailer = new Trailer("Expires");
    expect(trailer.build()).toBe("Expires");
  });

  it("should build a valid Trailer header object", () => {
    const trailer = new Trailer("Expires");
    expect(trailer.getHeadersObject()).toEqual({
      Trailer: "Expires",
    });
  });

  it("Allows you to construct the trailer with a builder function", () => {
    const hoursTrailer = new Trailer("");
    hoursTrailer.setTrailer("Expries");
    expect(hoursTrailer.build()).toBe("Expries");
  });
});
