import { Location } from "../src/header-classes/location.class";

describe("Location", () => {
  it("should build a valid Location header", () => {
    const location = new Location("/index.html");
    expect(location.build()).toBe("/index.html");
    location.setLocation("/app.html");
    expect(location.getHeadersObject()).toEqual({
      Location: "/app.html",
    });
  });
});
