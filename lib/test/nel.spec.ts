import { NEL } from "../src/nel.class";

describe("NEL", () => {
  it("should build a valid NEL header", () => {
    const nel = new NEL({
      report_to: "name_of_reporting_group",
      max_age: 12345,
      include_subdomains: false,
      success_fraction: 0.2,
      failure_fraction: 1.2,
    });
    expect(nel.build()).toBe(
      `{"report_to":"name_of_reporting_group","max_age":12345,"include_subdomains":false,"success_fraction":0.2,"failure_fraction":1.2}`
    );
    nel.setContent({
      report_to: "test",
      max_age: 111,
      include_subdomains: true,
      success_fraction: 0.3,
      failure_fraction: 1.5,
    });
    expect(nel.getHeadersObject()).toEqual({
      NEL: `{"report_to":"test","max_age":111,"include_subdomains":true,"success_fraction":0.3,"failure_fraction":1.5}`,
    });
  });
});
