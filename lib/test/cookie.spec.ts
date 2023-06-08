import { Cookie } from "../src/header-classes/cookie.class";

describe("Cookie", () => {
  it("builds a Cookie header", () => {
    const cookie = new Cookie(
      {
        name: "PHPSESSID",
        value: "298zf09hf012fh2",
      },
      {
        name: "csrftoken",
        value: "u32t4o3tb3gg43",
      },

      {
        name: "_gat",
        value: "1",
      }
    );
    expect(cookie.build()).toBe(
      "PHPSESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1"
    );
    cookie.setCookie({
      name: "sessionid",
      value: "123abc",
    });
    expect(cookie.getHeadersObject()).toEqual({
      Cookie: "sessionid=123abc",
    });
  });
});
