import { Authorization } from "../src/authorization.class";

describe("Authorization", () => {
  it("builds a Authorization header in basic case", () => {
    const authorization = new Authorization(
      "Basic",
      "YWxhZGRpbjpvcGVuc2VzYW1l"
    );
    expect(authorization.build()).toBe("Basic YWxhZGRpbjpvcGVuc2VzYW1l");

    authorization.setAuthorization(
      "Basic",
      "ODFjOTBkZjJhOTliN2RiNzk5MzlmZTc3NmUyYjFmMDI"
    );
    expect(authorization.getHeadersObject()).toEqual({
      Authorization: "Basic ODFjOTBkZjJhOTliN2RiNzk5MzlmZTc3NmUyYjFmMDI",
    });
  });

  it("builds a Authorization header in digest case", () => {
    const authorization = new Authorization("Digest", {
      username: "User123",
      realm: "example.com",
      nonce: "MTYyOTI4Njg1NjY3MzozODg0MzYxN2RjOTExMzJjMDYzOGJkZTE3NjI4NDAxMw==",
      uri: "/example",
      qop: "auth",
      nc: 1,
      cnonce: "ODFjOTBkZjJhOTliN2RiNzk5MzlmZTc3NmUyYjFmMDI=",
      response: "51dd120c5c7fd99fa4a153f5c8bc0c30",
      opaque: "05a3d0299c7977d1e821c2a4ed14eaa5",
      algorithm: "MD5",
    });
    expect(authorization.build()).toBe(
      `Digest username="User123", realm="example.com", nonce="MTYyOTI4Njg1NjY3MzozODg0MzYxN2RjOTExMzJjMDYzOGJkZTE3NjI4NDAxMw==", uri="/example", qop="auth", nc="1", cnonce="ODFjOTBkZjJhOTliN2RiNzk5MzlmZTc3NmUyYjFmMDI=", response="51dd120c5c7fd99fa4a153f5c8bc0c30", opaque="05a3d0299c7977d1e821c2a4ed14eaa5", algorithm="MD5"`
    );

    authorization.setAuthorization("Digest", {
      username: "DigestSetTest",
      realm: "digest_test.com",
      nonce: "aEdreDWERWDSFY3MzozODg0MzYxN2RjOTExMzJjMDYzOGJkZTE3NjI4NDAxMw==",
      uri: "/digest_test",
      qop: "auth-int",
      nc: 9,
      cnonce: "EHJDjOTBkZjJhOTliN2RiNzk5MzlmZTc3NmUyYjFmMDI=",
      response: "984d120c5c7fd99fa4a153f5c8bc0c30",
      opaque: "DERD3d0299c7977d1e821c2a4ed14eaa5",
      algorithm: "MD6",
    });
    expect(authorization.getHeadersObject()).toEqual({
      Authorization: `Digest username="DigestSetTest", realm="digest_test.com", nonce="aEdreDWERWDSFY3MzozODg0MzYxN2RjOTExMzJjMDYzOGJkZTE3NjI4NDAxMw==", uri="/digest_test", qop="auth-int", nc="9", cnonce="EHJDjOTBkZjJhOTliN2RiNzk5MzlmZTc3NmUyYjFmMDI=", response="984d120c5c7fd99fa4a153f5c8bc0c30", opaque="DERD3d0299c7977d1e821c2a4ed14eaa5", algorithm="MD6"`,
    });
  });
});
