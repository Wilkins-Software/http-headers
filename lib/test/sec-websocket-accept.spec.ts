import { SecWebsocketAccept } from "../src/header-classes/sec-websocket-accept.class";

describe("SecWebsocketAccept", () => {
  it("should build a valid SecWebsocketAccept header", () => {
    const accept = new SecWebsocketAccept("<hashed key>");
    expect(accept.build()).toBe("<hashed key>");
    accept.setSecWebsocketAccept("<hashed key1>");
    expect(accept.getHeadersObject()).toEqual({
      "Sec-WebSocket-Accept": "<hashed key1>",
    });
  });
});
