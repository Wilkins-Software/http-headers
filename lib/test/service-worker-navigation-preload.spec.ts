import { ServiceWorkerNavigationPreload } from "../src/header-classes/service-worker-navigation-preload.class";

describe("ServiceWorkerNavigationPreload", () => {
  it("should build a valid ServiceWorkerNavigationPreload header", () => {
    const preload = new ServiceWorkerNavigationPreload("true");
    expect(preload.build()).toBe("true");
    preload.setServiceWorkerNavigationPreload("json_fragment1");
    expect(preload.getHeadersObject()).toEqual({
      "Service-Worker-Navigation-Preload": "json_fragment1",
    });
  });
});
