import { Date } from "../src/header-classes/date.class";

describe("Date", () => {
  it("should build a valid Date header", () => {
    const date = new Date("Wed, 20 May 2023 12:00:00 GMT");
    expect(date.build()).toBe("Wed, 20 May 2023 12:00:00 GMT");
    date.setDate("Wed, 21 Oct 2015 07:28:00 GMT");
    expect(date.getHeadersObject()).toEqual({
      Date: "Wed, 21 Oct 2015 07:28:00 GMT",
    });
  });
});
