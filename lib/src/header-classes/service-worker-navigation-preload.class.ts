import { BaseHeader } from "./base-header.class";

export class ServiceWorkerNavigationPreload extends BaseHeader {
  protected _serviceWorkerNavigationPreload: string;

  constructor(serviceWorkerNavigationPreload: string) {
    super();
    this._serviceWorkerNavigationPreload = serviceWorkerNavigationPreload;
  }

  public getServiceWorkerNavigationPreload(): string {
    return this._serviceWorkerNavigationPreload;
  }
  public setServiceWorkerNavigationPreload(
    serviceWorkerNavigationPreload: string
  ) {
    this._serviceWorkerNavigationPreload = serviceWorkerNavigationPreload;
    return this;
  }

  getHeadersObject(): Record<string, string> {
    return {
      "Service-Worker-Navigation-Preload": this.build(),
    };
  }

  build(): string {
    return this.getServiceWorkerNavigationPreload().toString();
  }
}
