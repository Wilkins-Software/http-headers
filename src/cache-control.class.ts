import { compact } from 'lodash';

/**
 * Class implementation of the response directives listed here: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control
 */
export class CacheControlHeader {
  /**
   * The max-age=N response directive indicates that the response remains fresh until N seconds after the response is generated.
   */
  private _maxAge?: number | undefined;
  /**
   * The max-age=N response directive indicates that the response remains fresh until N seconds after the response is generated.
   */
  public get maxAge(): number | undefined {
    return this._maxAge;
  }
  /**
   * The max-age=N response directive indicates that the response remains fresh until N seconds after the response is generated.
   */
  public set maxAge(value: number | undefined) {
    this._maxAge = value;
  }
  /*
  -----------------------------------------------------
  */
  /**
   * The s-maxage response directive also indicates how long the response is fresh for (similar to max-age) — but it is specific to shared caches, and they will ignore max-age when it is present.
   */
  private _sharedMaxAge?: number | undefined;
  /**
   * The s-maxage response directive also indicates how long the response is fresh for (similar to max-age) — but it is specific to shared caches, and they will ignore max-age when it is present.
   */
  public get sharedMaxAge(): number | undefined {
    return this._sharedMaxAge;
  }
  /**
   * The s-maxage response directive also indicates how long the response is fresh for (similar to max-age) — but it is specific to shared caches, and they will ignore max-age when it is present.
   */
  public set sharedMaxAge(value: number | undefined) {
    this._sharedMaxAge = value;
  }
  /*
  -----------------------------------------------------
  */
  /**
   * The no-cache response directive indicates that the response can be stored in caches, but the response must be validated with the origin server before each reuse, even when the cache is disconnected from the origin server.
   */
  private _noCache: boolean = false;
  /**
   * The no-cache response directive indicates that the response can be stored in caches, but the response must be validated with the origin server before each reuse, even when the cache is disconnected from the origin server.
   */
  public get noCache(): boolean {
    return this._noCache;
  }
  /**
   * The no-cache response directive indicates that the response can be stored in caches, but the response must be validated with the origin server before each reuse, even when the cache is disconnected from the origin server.
   */
  public set noCache(value: boolean) {
    this._noCache = value;
  }
  /*
  -----------------------------------------------------
  */
  /**
   * The must-revalidate response directive indicates that the response can be stored in caches and can be reused while fresh. If the response becomes stale, it must be validated with the origin server before reuse.
   * Typically, must-revalidate is used with max-age.
   */
  private _mustRevalidate: boolean = false;
  /**
   * The must-revalidate response directive indicates that the response can be stored in caches and can be reused while fresh. If the response becomes stale, it must be validated with the origin server before reuse.
   * Typically, must-revalidate is used with max-age.
   */
  public get mustRevalidate(): boolean {
    return this._mustRevalidate;
  }
  /**
   * The must-revalidate response directive indicates that the response can be stored in caches and can be reused while fresh. If the response becomes stale, it must be validated with the origin server before reuse.
   * Typically, must-revalidate is used with max-age.
   */
  public set mustRevalidate(value: boolean) {
    this._mustRevalidate = value;
  }
  /*
  -----------------------------------------------------
  */
  /**
   * The proxy-revalidate response directive is the equivalent of must-revalidate, but specifically for shared caches only.
   */
  private _proxyMustRevalidate: boolean = false;
  /**
   * The proxy-revalidate response directive is the equivalent of must-revalidate, but specifically for shared caches only.
   */
  public get proxyMustRevalidate(): boolean {
    return this._proxyMustRevalidate;
  }
  /**
   * The proxy-revalidate response directive is the equivalent of must-revalidate, but specifically for shared caches only.
   */
  public set proxyMustRevalidate(value: boolean) {
    this._proxyMustRevalidate = value;
  }
  /*
  -----------------------------------------------------
  */
  /**
   * The no-store response directive indicates that any caches of any kind (private or shared) should not store this response.
   */
  private _noStore: boolean = false;
  /**
   * The no-store response directive indicates that any caches of any kind (private or shared) should not store this response.
   */
  public get noStore(): boolean {
    return this._noStore;
  }
  /**
   * The no-store response directive indicates that any caches of any kind (private or shared) should not store this response.
   */
  public set noStore(value: boolean) {
    if (value) {
      if (this.isPrivate)
        throw new Error(`Cannot set both no-store and private to true`);
      if (this.noCache)
        throw new Error(`Cannot set both no-store and no-cache to true`);
      if (this.maxAge === 0)
        throw new Error(`Cannot set both no-store to true and max-age to 0`);
      if (this.mustRevalidate)
        throw new Error(`Cannot set both no-store and must-revalidate to true`);
    }

    this._noStore = value;
  }
  /*
  -----------------------------------------------------
  */
  /**
   * The private response directive indicates that the response can be stored only in a private cache (e.g. local caches in browsers).
   */
  private _isPrivate: boolean = false;
  /**
   * The private response directive indicates that the response can be stored only in a private cache (e.g. local caches in browsers).
   */
  public get isPrivate(): boolean {
    return this._isPrivate;
  }
  /**
   * The private response directive indicates that the response can be stored only in a private cache (e.g. local caches in browsers).
   */
  public set isPrivate(value: boolean) {
    if (this._isPublic !== !value) {
      this._isPublic = !value;
    }
    this._isPrivate = value;
  }
  /*
  -----------------------------------------------------
  */
  /**
   * The public response directive indicates that the response can be stored in a shared cache. Responses for requests with Authorization header fields must not be stored in a shared cache; however, the public directive will cause such responses to be stored in a shared cache.
   */
  private _isPublic: boolean = false;
  /**
   * The public response directive indicates that the response can be stored in a shared cache. Responses for requests with Authorization header fields must not be stored in a shared cache; however, the public directive will cause such responses to be stored in a shared cache.
   */
  public get isPublic(): boolean {
    return this._isPublic;
  }
  /**
   * The public response directive indicates that the response can be stored in a shared cache. Responses for requests with Authorization header fields must not be stored in a shared cache; however, the public directive will cause such responses to be stored in a shared cache.
   */
  public set isPublic(value: boolean) {
    if (this._isPrivate !== !value) {
      this._isPrivate = !value;
    }
    this._isPublic = value;
  }
  /*
  -----------------------------------------------------
  */
  /**
   * The must-understand response directive indicates that a cache should store the response only if it understands the requirements for caching based on status code.
   * must-understand should be coupled with no-store for fallback behavior.
   */
  private _mustUnderstand: boolean = false;
  /**
   * The must-understand response directive indicates that a cache should store the response only if it understands the requirements for caching based on status code.
   * must-understand should be coupled with no-store for fallback behavior.
   */
  public get mustUnderstand(): boolean {
    return this._mustUnderstand;
  }
  /**
   * The must-understand response directive indicates that a cache should store the response only if it understands the requirements for caching based on status code.
   * must-understand should be coupled with no-store for fallback behavior.
   */
  public set mustUnderstand(value: boolean) {
    this._mustUnderstand = value;
  }
  /*
  -----------------------------------------------------
  */
  /**
   * Some intermediaries transform content for various reasons. For example, some convert images to reduce transfer size. In some cases, this is undesirable for the content provider.
   * no-transform indicates that any intermediary (regardless of whether it implements a cache) shouldn't transform the response contents.
   * Note: Google's Web Light is one kind of such an intermediary. It converts images to minimize data for a cache store or slow connection and supports no-transform as an opt-out option.
   */
  private _noTransform: boolean = false;
  /**
   * Some intermediaries transform content for various reasons. For example, some convert images to reduce transfer size. In some cases, this is undesirable for the content provider.
   * no-transform indicates that any intermediary (regardless of whether it implements a cache) shouldn't transform the response contents.
   * Note: Google's Web Light is one kind of such an intermediary. It converts images to minimize data for a cache store or slow connection and supports no-transform as an opt-out option.
   */
  public get noTransform(): boolean {
    return this._noTransform;
  }
  /**
   * Some intermediaries transform content for various reasons. For example, some convert images to reduce transfer size. In some cases, this is undesirable for the content provider.
   * no-transform indicates that any intermediary (regardless of whether it implements a cache) shouldn't transform the response contents.
   * Note: Google's Web Light is one kind of such an intermediary. It converts images to minimize data for a cache store or slow connection and supports no-transform as an opt-out option.
   */
  public set noTransform(value: boolean) {
    this._noTransform = value;
  }
  /*
  -----------------------------------------------------
  */
  /**
   * The immutable response directive indicates that the response will not be updated while it's fresh.
   */
  private _immutable: boolean = false;
  /**
   * The immutable response directive indicates that the response will not be updated while it's fresh.
   */
  public get immutable(): boolean {
    return this._immutable;
  }
  /**
   * The immutable response directive indicates that the response will not be updated while it's fresh.
   */
  public set immutable(value: boolean) {
    this._immutable = value;
  }
  /*
  -----------------------------------------------------
  */
  /**
   * The stale-while-revalidate response directive indicates that the cache could reuse a stale response while it revalidates it to a cache.
   */
  private _staleWhileRevalidate: boolean = false;
  /**
   * The stale-while-revalidate response directive indicates that the cache could reuse a stale response while it revalidates it to a cache.
   */
  public get staleWhileRevalidate(): boolean {
    return this._staleWhileRevalidate;
  }
  /**
   * The stale-while-revalidate response directive indicates that the cache could reuse a stale response while it revalidates it to a cache.
   */
  public set staleWhileRevalidate(value: boolean) {
    this._staleWhileRevalidate = value;
  }
  /*
  -----------------------------------------------------
  */
  /**
   * The stale-if-error response directive indicates that the cache can reuse a stale response when an origin server responds with an error (500, 502, 503, or 504).
   */
  private _staleIfError: boolean = false;
  /**
   * The stale-if-error response directive indicates that the cache can reuse a stale response when an origin server responds with an error (500, 502, 503, or 504).
   */
  public get staleIfError(): boolean {
    return this._staleIfError;
  }
  /**
   * The stale-if-error response directive indicates that the cache can reuse a stale response when an origin server responds with an error (500, 502, 503, or 504).
   */
  public set staleIfError(value: boolean) {
    this._staleIfError = value;
  }
  /*
  -----------------------------------------------------
  */
  build() {
    const directives = {
      'no-cache': this._noCache,
      'no-store': this._noStore,
      'max-age': this._maxAge,
      's-maxage': this._sharedMaxAge,
      public: this._isPublic,
      private: this._isPrivate,
      'must-revalidate': this._mustUnderstand,
      'no-transform': this._noTransform,
      immutable: this._immutable,
      'stale-while-revalidate': this._staleWhileRevalidate,
      'stale-if-error': this._staleIfError,
    };

    const headerSegmentArray = Object.entries(directives).reduce<any[]>(
      (acc, [key, value]) => {
        return [
          ...acc,
          typeof value !== 'boolean' && value !== undefined
            ? `${key}=${value}`
            : value
            ? `${key}`
            : null,
        ];
      },
      []
    );

    return compact(headerSegmentArray).join(', ');
  }

  public getHeadersObject() {
    return {
      'Cache-Control': this.build(),
    };
  }

  constructor({
    maxAge,
    sharedMaxAge,
    noCache,
    mustRevalidate,
    proxyMustRevalidate,
    noStore,
    isPrivate,
    isPublic,
    mustUnderstand,
    noTransform,
    immutable,
    staleWhileRevalidate,
    staleIfError,
  }: {
    maxAge?: CacheControlHeader['maxAge'];
    sharedMaxAge?: CacheControlHeader['sharedMaxAge'];
    noCache?: CacheControlHeader['noCache'];
    mustRevalidate?: CacheControlHeader['mustRevalidate'];
    proxyMustRevalidate?: CacheControlHeader['proxyMustRevalidate'];
    noStore?: CacheControlHeader['noStore'];
    isPrivate?: CacheControlHeader['isPrivate'];
    isPublic?: CacheControlHeader['isPublic'];
    mustUnderstand?: CacheControlHeader['mustUnderstand'];
    noTransform?: CacheControlHeader['noTransform'];
    immutable?: CacheControlHeader['immutable'];
    staleWhileRevalidate?: CacheControlHeader['staleWhileRevalidate'];
    staleIfError?: CacheControlHeader['staleIfError'];
  }) {
    this.maxAge = maxAge;
    this.sharedMaxAge = sharedMaxAge;
    if (noCache) this.noCache = noCache;
    if (mustRevalidate) this.mustRevalidate = mustRevalidate;
    if (proxyMustRevalidate) this.proxyMustRevalidate = proxyMustRevalidate;
    if (noStore) this.noStore = noStore;
    if (isPrivate) this.isPrivate = isPrivate;
    if (isPublic) this.isPublic = isPublic;
    if (mustUnderstand) this.mustUnderstand = mustUnderstand;
    if (noTransform) this.noTransform = noTransform;
    if (immutable) this.immutable = immutable;
    if (staleWhileRevalidate) this.staleWhileRevalidate = staleWhileRevalidate;
    if (staleIfError) this.staleIfError = staleIfError;
  }

  static maxAge = {
    miliseconds: (miliseconds: number) =>
      new CacheControlHeader({ maxAge: miliseconds / 1000 }),
    seconds: (seconds: number) => new CacheControlHeader({ maxAge: seconds }),
    minutes: (minutes: number) =>
      new CacheControlHeader({ maxAge: minutes * 60 }),
    hours: (hours: number) =>
      new CacheControlHeader({ maxAge: hours * 60 * 60 }),
    days: (days: number) =>
      new CacheControlHeader({ maxAge: days * 60 * 60 * 24 }),
    weeks: (weeks: number) =>
      new CacheControlHeader({ maxAge: weeks * 60 * 60 * 24 * 7 }),
    months: (months: number) =>
      new CacheControlHeader({ maxAge: months * 60 * 60 * 24 * 30 }),
    years: (years: number) =>
      new CacheControlHeader({ maxAge: years * 60 * 60 * 24 * 365 }),
  };

  static noCache = () => new CacheControlHeader({ noCache: true });
}
