import { Forwarded } from "../src/forwarded.class";

describe("Forwarded", () => {
  it("builds a Forwarded header", () => {
    const forwarded = new Forwarded(
      {
        key: "for",
        value: "192.0.2.60",
      },
      {
        key: "proto",
        value: "http",
      },

      {
        key: "by",
        value: "203.0.113.43",
      }
    );
    expect(forwarded.build()).toBe("for=192.0.2.60;proto=http;by=203.0.113.43");
    forwarded.setForwarded(
      {
        key: "for",
        value: "192.0.2.43",
      },
      {
        key: "for",
        value: "198.51.100.17",
      }
    );
    expect(forwarded.getHeadersObject()).toEqual({
      Forwarded: "for=192.0.2.43, for=198.51.100.17",
    });
  });
});
