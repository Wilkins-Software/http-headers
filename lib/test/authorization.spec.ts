import { Authorization } from "../src/authorization.class";

describe("Authorization", () => {
  it("builds a Authorization header in basic case", () => {
    const authorization = new Authorization("Basic", "<credentials-key>");
    expect(authorization.build()).toBe("Basic <credentials-key>");

    authorization.setAuthorization("Basic", "<credentials-other-key>");
    expect(authorization.getHeadersObject()).toEqual({
      Authorization: "Basic <credentials-other-key>",
    });
  });

  it("builds a Authorization header in digest case", () => {
    const authorization = new Authorization("Digest", {
      username: "User123",
      realm: "example.com",
      nonce: "<credentials-nonce-key>",
      uri: "/example",
      qop: "auth",
      nc: 1,
      cnonce: "<credentials-nc-key>",
      response: "<credentials-response-key>",
      opaque: "<credentials-opaque-key>",
      algorithm: "MD5",
    });
    expect(authorization.build()).toBe(
      `Digest username="User123", realm="example.com", nonce="<credentials-nonce-key>", uri="/example", qop="auth", nc="1", cnonce="<credentials-nc-key>", response="<credentials-response-key>", opaque="<credentials-opaque-key>", algorithm="MD5"`
    );

    authorization.setAuthorization("Digest", {
      username: "DigestSetTest",
      realm: "digest_test.com",
      nonce: "<credentials-nonce-key-other>==",
      uri: "/digest_test",
      qop: "auth-int",
      nc: 9,
      cnonce: "<credentials-nc-key-other>",
      response: "<credentials-response-key-other>",
      opaque: "<credentials-opaque-key-other>",
      algorithm: "MD6",
    });
    expect(authorization.getHeadersObject()).toEqual({
      Authorization: `Digest username="DigestSetTest", realm="digest_test.com", nonce="<credentials-nonce-key-other>==", uri="/digest_test", qop="auth-int", nc="9", cnonce="<credentials-nc-key-other>", response="<credentials-response-key-other>", opaque="<credentials-opaque-key-other>", algorithm="MD6"`,
    });
  });
});
