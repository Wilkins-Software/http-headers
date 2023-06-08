import { CrossOriginEmbedderPolicy } from "../src/header-classes/cross-origin-embedder-policy.class";

describe("CrossOriginEmbedderPolicy", () => {
  it("should build a valid CrossOriginEmbedderPolicy header", () => {
    const policy = new CrossOriginEmbedderPolicy("unsafe-none");
    expect(policy.build()).toBe("unsafe-none");
    policy.setPolicy("credentialless");
    expect(policy.getHeadersObject()).toEqual({
      "Cross-Origin-Embedder-Policy": "credentialless",
    });
  });
});
