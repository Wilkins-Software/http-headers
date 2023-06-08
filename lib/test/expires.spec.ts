import { Expires } from "../src/header-classes/expires.class";

describe("Expires()", () => {
  it("Sets the exires header to a UTC date equal to the provided date", () => {
    const expires = new Expires(new Date(Date.UTC(2020, 0, 1)));
    expect(expires.build()).toEqual("Wed, 01 Jan 2020 00:00:00 GMT");
  });
});
