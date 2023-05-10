import { Via } from "../src/via.class";

describe("Via", () => {
  it("builds a Via header", () => {
    const via = new Via(
      {
        version: "1.0",
        pseudonym: "fred",
      },
      {
        version: "1.1",
        host: "p.example.net",
        port: "80",
      }
    );
    expect(via.build()).toBe("1.0 fred, 1.1 p.example.net:80");
    via.setVia({
      name: "HTTP",
      version: "1.1",
      pseudonym: "GWA",
    });
    expect(via.getHeadersObject()).toEqual({
      Via: "HTTP/1.1 GWA",
    });
  });
});
