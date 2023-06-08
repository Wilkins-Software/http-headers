import { Accept } from "../src/header-classes/accept.class";

describe("Accept", () => {
  it("should build a valid Accept header", () => {
    const accept = new Accept(
      "text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8"
    );
    expect(accept.build()).toBe(
      "text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8"
    );
    expect(accept.getHeadersObject()).toEqual({
      Accept:
        "text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8",
    });
  });

  it("should set a valid Accept header", () => {
    const accept = new Accept(
      "text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8"
    );
    expect(accept.setAccept("image/*").build()).toBe("image/*");
  });
});
