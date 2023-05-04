import { AcceptEncoding } from "../src/accept-encoding.class";

describe("AcceptEncoding", () => {
  it("builds a AcceptEncoding header", () => {
    const acceptEncoding = new AcceptEncoding({
      gzip: true,
      compress: true,
      deflate: 0.5,
      br: true,
      identity: 1.0,
    });
    expect(acceptEncoding.build()).toBe(
      "gzip, compress, deflate;q=0.5, br, identity;q=1"
    );
    expect(acceptEncoding.getHeadersObject()).toEqual({
      "Accept-Encoding": "gzip, compress, deflate;q=0.5, br, identity;q=1",
    });
  });

  it("builds valid setter AcceptEncoding header", () => {
    const acceptEncoding = new AcceptEncoding({
      gzip: true,
      compress: true,
      deflate: 0.5,
      br: true,
      identity: 1.0,
    });
    acceptEncoding.setProperty("identity", 0.8);
    expect(acceptEncoding.build()).toBe(
      "gzip, compress, deflate;q=0.5, br, identity;q=0.8"
    );

    acceptEncoding.setAllProperty({
      deflate: 0.1,
      identity: 0.2,
    });
    expect(acceptEncoding.getHeadersObject()).toEqual({
      "Accept-Encoding": "deflate;q=0.1, identity;q=0.2",
    });
  });

  it("builds a AcceptEncoding header with *", () => {
    const acceptEncoding = new AcceptEncoding("*");
    expect(acceptEncoding.build()).toBe("*");
    expect(acceptEncoding.getHeadersObject()).toEqual({
      "Accept-Encoding": "*",
    });
  });
});
