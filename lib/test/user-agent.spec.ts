import { UserAgent } from "../src/user-agent.class";

describe("UserAgent", () => {
  it("builds a UserAgent header", () => {
    const userAgent = new UserAgent(
      {
        product: "Mozilla",
        version: "5.0",
        comment: "(iPhone; CPU iPhone OS 13_5_1 like Mac OS X)",
      },
      {
        product: "AppleWebKit",
        version: "605.1.15",
        comment: "(KHTML, like Gecko)",
      },

      {
        product: "Version",
        version: "13.1.1",
      },
      {
        product: "Mobile",
        version: "15E148",
      },
      {
        product: "Safari",
        version: "604.1",
      }
    );
    expect(userAgent.build()).toBe(
      "Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1"
    );
    userAgent.setUserAgent({
      product: "curl",
      version: "7.64.1",
    });
    expect(userAgent.getHeadersObject()).toEqual({
      "User-Agent": "curl/7.64.1",
    });
  });
});
