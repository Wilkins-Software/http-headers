import { From } from "../src/from.class";

describe("From", () => {
  it("builds a From header", () => {
    const from = new From("example@mail.com");
    expect(from.build()).toBe("example@mail.com");
    from.setFrom("test@mail.com");
    expect(from.getHeadersObject()).toEqual({
      From: "test@mail.com",
    });
  });
});
