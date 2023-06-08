import { SaveData } from "../src/header-classes/save-data.class";

describe("SaveData", () => {
  it("should build a valid SaveData header", () => {
    const saveData = new SaveData("on");
    expect(saveData.build()).toBe("on");
    saveData.setSaveData("off");
    expect(saveData.getHeadersObject()).toEqual({
      "Save-Data": "off",
    });
  });
});
