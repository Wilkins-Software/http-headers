import { Upgrade } from "../src/upgrade.class";

describe("Upgrade", () => {
  it("builds a Upgrade header", () => {
    const cookie = new Upgrade(
      {
        name: "a_protocol",
        version: "1",
      },
      {
        name: "example",
      },

      {
        name: "another_protocol",
        version: "2.2",
      }
    );
    expect(cookie.build()).toBe("a_protocol/1, example, another_protocol/2.2");
    cookie.setUpgrade({
      name: "websocket",
    });
    expect(cookie.getHeadersObject()).toEqual({
      Upgrade: "websocket",
    });
  });
});
