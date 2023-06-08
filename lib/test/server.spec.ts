import { Server } from "../src/header-classes/server.class";

describe("Server", () => {
  it("should build a valid Server header", () => {
    const accept = new Server("Apache/2.4.1 (Unix)");
    expect(accept.build()).toBe("Apache/2.4.1 (Unix)");
    accept.setServer("Apache/2.6.3 (Unix)");
    expect(accept.getHeadersObject()).toEqual({
      Server: "Apache/2.6.3 (Unix)",
    });
  });
});
