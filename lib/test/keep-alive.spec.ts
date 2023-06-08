import { KeepAlive } from "../src/header-classes/keep-alive.class";

describe("getters and setters", () => {
  it("Sets private to the opposite of public", () => {
    const keepAlive = new KeepAlive({});
    keepAlive.setTimeOut(5);
    expect(keepAlive.getTimeOut()).toBe(5);
    keepAlive.setMax(1000);
    expect(keepAlive.getMax()).toBe(1000);
  });
});

describe("object", () => {
  it("should build a valid keep alive header object", () => {
    const keepAlive = new KeepAlive({
      timeout: 5,
    });
    expect(keepAlive.getHeadersObject()).toEqual({
      "Keep-Alive": "timeout=5",
    });
  });
});

describe("build", () => {
  it("builds keep alive header", () => {
    const keepAlive = new KeepAlive({
      timeout: 5,
      max: 1000,
    });

    expect(keepAlive.build()).toBe("timeout=5, max=1000");
  });
});
