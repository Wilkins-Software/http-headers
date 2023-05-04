import { AcceptEncoding } from "../src/accept-encoding.class";

describe("AcceptEncoding", () => {
  it("builds a AcceptEncoding header", () => {
    const te = new AcceptEncoding({
      gzip: true,
      compress: true,
      deflate: 0.5,
      br: true,
      identity: 1.0,
    });
    expect(te.build()).toBe("gzip, compress, deflate;q=0.5, br, identity;q=1");
    expect(te.getHeadersObject()).toEqual({
      "Accept-Encoding": "gzip, compress, deflate;q=0.5, br, identity;q=1",
    });
  });

  it("builds valid setter AcceptEncoding header", () => {
    const te = new AcceptEncoding({
      gzip: true,
      compress: true,
      deflate: 0.5,
      br: true,
      identity: 1.0,
    });
    te.setProperty("identity", 0.8);
    expect(te.build()).toBe(
      "gzip, compress, deflate;q=0.5, br, identity;q=0.8"
    );

    te.setAllProperty({
      deflate: 0.1,
      identity: 0.2,
    });
    expect(te.getHeadersObject()).toEqual({
      "Accept-Encoding": "deflate;q=0.1, identity;q=0.2",
    });
  });

  it("builds a AcceptEncoding header with *", () => {
    const te = new AcceptEncoding("*");
    expect(te.build()).toBe("*");
    expect(te.getHeadersObject()).toEqual({
      "Accept-Encoding": "*",
    });
  });
});
