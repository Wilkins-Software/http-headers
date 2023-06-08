import { ContentDisposition } from "../src/header-classes/content-disposition.class";

describe("ContentDisposition", () => {
  it("builds a ContentDisposition header", () => {
    const contentDisposition = new ContentDisposition();
    expect(contentDisposition.build()).toBe("");
    expect(contentDisposition.getHeadersObject()).toEqual({
      "Content-Disposition": "",
    });
  });

  it("builds valid setter ContentDisposition header", () => {
    const contentDisposition = new ContentDisposition();
    contentDisposition.setType("form-data");
    contentDisposition.setName("file");
    expect(contentDisposition.build()).toBe(`form-data; name="file"`);
    contentDisposition.setFileName("document.pdf");
    expect(contentDisposition.getHeadersObject()).toEqual({
      "Content-Disposition": `form-data; name="file"; filename="document.pdf"`,
    });
  });
});
