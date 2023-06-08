import { PermissionsPolicy } from "../src/header-classes/permissions-policy.class";

describe("PermissionPolicy", () => {
  it("builds a PermissionPolicy header", () => {
    const policy = new PermissionsPolicy(
      {
        directive: "picture-in-picture",
        allowlist: "",
      },
      {
        directive: "geolocation",
        allowlist: "self https://example.com",
      },
      {
        directive: "camera",
        allowlist: "*",
      }
    );
    expect(policy.build()).toBe(
      "picture-in-picture=(), geolocation=(self https://example.com), camera=*"
    );
    policy.setPermissionsPolicy({
      directive: "geolocation",
      allowlist: "self https://example.com",
    });
    expect(policy.getHeadersObject()).toEqual({
      "Permissions-Policy": "geolocation=(self https://example.com)",
    });
  });
});
