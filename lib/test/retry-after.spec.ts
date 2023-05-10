import { RetryAfter } from "../src/retry-after.class";

describe("RetryAfter", () => {
  it("should build a valid RetryAfter header", () => {
    const retryAfter = new RetryAfter("Wed, 21 Oct 2015 07:28:00 GMT");
    expect(retryAfter.build()).toBe("Wed, 21 Oct 2015 07:28:00 GMT");
    retryAfter.setRetryAfter(150);
    expect(retryAfter.getHeadersObject()).toEqual({
      "Retry-After": "150",
    });
  });
});
