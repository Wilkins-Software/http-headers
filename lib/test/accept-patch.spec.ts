import { AcceptPatch } from "../src/accept-patch.class";

describe("AcceptPatch", () => {
  it("should build a valid AcceptPatch header", () => {
    const connection = new AcceptPatch("application/example, text/example");
    expect(connection.build()).toBe("application/example, text/example");
    expect(connection.getHeadersObject()).toEqual({
      "Accept-Patch": "application/example, text/example",
    });
  });

  it("should set a valid AcceptPatch header", () => {
    const connection = new AcceptPatch("application/example, text/example");
    expect(
      connection.setAcceptPatch("application/merge-patch+json").build()
    ).toBe("application/merge-patch+json");
  });
});
