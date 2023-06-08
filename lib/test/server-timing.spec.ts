import { ServerTiming } from "../src/header-classes/server-timing.class";

describe("ServerTiming", () => {
  it("should build a valid ServerTiming header", () => {
    const timing = new ServerTiming([{ name: "missedCache" }]);
    expect(timing.build()).toBe("missedCache");
    timing.setServerTiming([
      {
        name: "cache",
        description: "Cache Read",
        duration: ({ seconds }) => seconds(1.5),
      },
    ]);
    expect(timing.getHeadersObject()).toEqual({
      "Server-Timing": `cache;desc="Cache Read";dur=1500`,
    });
  });

  it("should build a valid ServerTiming header with multiple properties", () => {
    const timing = new ServerTiming([{ name: "missedCache" }]);
    timing.setServerTiming([
      {
        name: "cache",
        description: "Cache Read",
        duration: ({ seconds }) => seconds(1.5),
      },
      {
        name: "db",
        description: "DB query",
        duration: ({ minutes }) => minutes(1.5),
      },
    ]);

    expect(timing.getHeadersObject()).toEqual({
      "Server-Timing": `cache;desc="Cache Read";dur=1500,db;desc="DB query";dur=90000`,
    });
  });
});
