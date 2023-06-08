import { DeviceMemory } from "../src/header-classes/device-memory.class";

describe("DeviceMemory", () => {
  it("should build a valid DeviceMemory header", () => {
    const deviceMemory = new DeviceMemory(1);
    expect(deviceMemory.build()).toBe("1");
    deviceMemory.setDeviceMemory(2);
    expect(deviceMemory.getHeadersObject()).toEqual({
      "Device-Memory": "2",
    });
  });
});
