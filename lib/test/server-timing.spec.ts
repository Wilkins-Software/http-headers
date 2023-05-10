import { ServerTiming } from "../src/server-timing.class";

describe("ServerTiming", () => {
  it("should build a valid ServerTiming header", () => {
    const timing = new ServerTiming("missedCache");
    expect(timing.build()).toBe("missedCache");
    timing.setServerTiming(`cache;desc="Cache Read";dur=23.2`);
    expect(timing.getHeadersObject()).toEqual({
      "Server-Timing": `cache;desc="Cache Read";dur=23.2`,
    });
  });
});
