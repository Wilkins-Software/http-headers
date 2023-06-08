import { Digest } from "../src/header-classes/digest.class";

describe("Digest", () => {
  it("builds a Digest header", () => {
    const digest = new Digest({
      algorithm: "sha-256",
      value: "X48E9qOokqqrvdts8nOJRJN3OWDUoyWxBf7kbu9DBPE=",
    });
    expect(digest.build()).toBe(
      "sha-256=X48E9qOokqqrvdts8nOJRJN3OWDUoyWxBf7kbu9DBPE="
    );
    digest.setContent(
      {
        algorithm: "sha-256",
        value: "X48E9qOokqqrvdts8nOJRJN3OWDUoyWxBf7kbu9DBPE=",
      },
      {
        algorithm: "unixsum",
        value: "30637",
      }
    );
    expect(digest.getHeadersObject()).toEqual({
      Digest:
        "sha-256=X48E9qOokqqrvdts8nOJRJN3OWDUoyWxBf7kbu9DBPE=,unixsum=30637",
    });
  });
});
