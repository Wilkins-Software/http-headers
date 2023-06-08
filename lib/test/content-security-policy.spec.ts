import { ContentSecurityPolicy } from "../src/header-classes/content-security-policy.class";

describe("ContentSecurity", () => {
  it("builds a ContentSecurity header", () => {
    const contentSecuirtyPolicy = new ContentSecurityPolicy(
      "script-src 'self' https://example.com 'unsafe-inline'",
      "default-src 'self' https://example.com"
    );
    expect(contentSecuirtyPolicy.build()).toBe(
      "script-src 'self' https://example.com 'unsafe-inline'; default-src 'self' https://example.com"
    );
    contentSecuirtyPolicy.setPolicy(
      "style-src 'self' https://example.com 'unsafe-inline'"
    );
    expect(contentSecuirtyPolicy.getHeadersObject()).toEqual({
      "Content-Security-Policy":
        "style-src 'self' https://example.com 'unsafe-inline'",
    });
  });
});
