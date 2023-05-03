import { TransferEncoding } from "../src/transfer-encoding.class";

describe("TransferEncoding", () => {
  it("builds a Transfer Encoding header", () => {
    const transferEncoding = new TransferEncoding({
      chunked: true,
      compress: true,
      deflate: true,
      gzip: true,
    });
    expect(transferEncoding.build()).toBe("chunked, compress, deflate, gzip");
    expect(transferEncoding.getHeadersObject()).toEqual({
      "Transfer-Encoding": "chunked, compress, deflate, gzip",
    });
  });

  it("builds a Transfer Encoding header with *", () => {
    const transferEncoding = new TransferEncoding("*");
    expect(transferEncoding.build()).toBe("*");
    expect(transferEncoding.getHeadersObject()).toEqual({
      "Transfer-Encoding": "*",
    });
  });
});
