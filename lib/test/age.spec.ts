import { Age } from "../src/header-classes/age.class";
describe("Age", () => {
  it("should build a valid Age header", () => {
    const age = new Age(123);
    expect(age.build()).toBe("123");
  });

  it("should build a valid Age header object", () => {
    const age = new Age(123);
    expect(age.getHeadersObject()).toEqual({
      Age: "123",
    });
  });

  it("Allows you to construct the age with a builder function", () => {
    const daysAge = new Age(({ days }) => days(1));
    expect(daysAge.build()).toBe("86400");

    const secondsAge = new Age(({ minutes }) => minutes(1));
    expect(secondsAge.build()).toBe("60");

    const hoursAge = new Age(({ hours }) => hours(1));
    expect(hoursAge.build()).toBe("3600");
  });
});
