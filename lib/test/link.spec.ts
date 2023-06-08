import { Link } from "../src/header-classes/link.class";

describe("Link", () => {
  it("builds a Link header", () => {
    const link = new Link({
      uri: "https://example.com/%E8%8B%97%E6%9D%A1",
      param: [
        {
          name: "rel",
          value: "preconnect",
        },
      ],
    });
    expect(link.build()).toBe(
      `<https://example.com/%E8%8B%97%E6%9D%A1>; rel="preconnect"`
    );
    link.setLink(
      {
        uri: "https://www.example.com",
        param: [
          {
            name: "rel",
            value: "preload",
          },
        ],
      },
      {
        uri: "https://www.example2.com",
        param: [
          {
            name: "rel",
            value: "stylesheet",
          },
        ],
      }
    );
    expect(link.getHeadersObject()).toEqual({
      Link: `<https://www.example.com>; rel="preload", <https://www.example2.com>; rel="stylesheet"`,
    });
  });
});
