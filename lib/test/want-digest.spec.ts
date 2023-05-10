import { WantDigest } from "../src/want-digest.class";

describe("WantDigest", () => {
  it("builds a WantDigest header", () => {
    const wantDigest = new WantDigest({
      algorithm: "id-sha-512",
    });
    expect(wantDigest.build()).toBe("id-sha-512");
    wantDigest.setWantDigest(
      {
        algorithm: "SHA-512",
        value: 0.3,
      },
      {
        algorithm: "sha-256",
        value: 1,
      },
      {
        algorithm: "md5",
        value: 0,
      }
    );
    expect(wantDigest.getHeadersObject()).toEqual({
      WantDigest: "SHA-512;q=0.3, sha-256;q=1, md5",
    });
  });
});
