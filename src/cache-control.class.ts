import { compact } from 'lodash';
import { BaseHeader } from './base-header';

/**
 * Class implementation of the response directives listed here: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control
 */
export class CacheControlHeader extends BaseHeader {
  /** The max-age=N response directive indicates that the response remains fresh until N seconds after the response is generated. */
  private _maxAge?: number | undefined;
  /** The s-maxage response directive also indicates how long the response is fresh for (similar to max-age) — but it is specific to shared caches, and they will ignore max-age when it is present. */
  private _sharedMaxAge?: number | undefined;
  /** The no-cache response directive indicates that the response can be stored in caches, but the response must be validated with the origin server before each reuse, even when the cache is disconnected from the origin server. */
  private _noCache: boolean = false;
  /** The must-revalidate response directive indicates that the response can be stored in caches and can be reused while fresh. If the response becomes stale, it must be validated with the origin server before reuse. Typically, must-revalidate is used with max-age. */
  private _mustRevalidate: boolean = false;
  /** The proxy-revalidate response directive is the equivalent of must-revalidate, but specifically for shared caches only. */
  private _proxyMustRevalidate: boolean = false;
  /** The no-store response directive indicates that any caches of any kind (private or shared) should not store this response. */
  private _noStore: boolean = false;
  /** The private response directive indicates that the response can be stored only in a private cache (e.g. local caches in browsers). */
  private _isPrivate: boolean = false;
  /** The public response directive indicates that the response can be stored in a shared cache. Responses for requests with Authorization header fields must not be stored in a shared cache; however, the public directive will cause such responses to be stored in a shared cache. */
  private _isPublic: boolean = false;
  /** The must-understand response directive indicates that a cache should store the response only if it understands the requirements for caching based on status code. must-understand should be coupled with no-store for fallback behavior. */
  private _mustUnderstand: boolean = false;
  /** Some intermediaries transform content for various reasons. For example, some convert images to reduce transfer size. In some cases, this is undesirable for the content provider. no-transform indicates that any intermediary (regardless of whether it implements a cache) shouldn't transform the response contents. Note: Google's Web Light is one kind of such an intermediary. It converts images to minimize data for a cache store or slow connection and supports no-transform as an opt-out option. */
  private _noTransform: boolean = false;
  /** The immutable response directive indicates that the response will not be updated while it's fresh. */
  private _immutable: boolean = false;
  /** The stale-while-revalidate response directive indicates that the cache could reuse a stale response while it revalidates it to a cache. */
  private _staleWhileRevalidate: boolean = false;
  /** The stale-if-error response directive indicates that the cache can reuse a stale response when an origin server responds with an error (500, 502, 503, or 504). */
  private _staleIfError: boolean = false;

  getMaxAge(): number | undefined {
    return this._maxAge;
  }
  setMaxAge(value: number | undefined) {
    this._maxAge = value;
    return this;
  }
  /* ----------------------------------------------------- */
  getSharedMaxAge(): number | undefined {
    return this._sharedMaxAge;
  }
  setSharedMaxAge(value: number | undefined) {
    this._sharedMaxAge = value;
    return this;
  }
  /* ----------------------------------------------------- */
  getNoCache(): boolean {
    return this._noCache;
  }
  setNoCache(value: boolean) {
    this._noCache = value;
    return this;
  }
  /* ----------------------------------------------------- */
  getMustRevalidate(): boolean {
    return this._mustRevalidate;
  }
  setMustRevalidate(value: boolean) {
    this._mustRevalidate = value;
    return this;
  }
  /* ----------------------------------------------------- */
  getProxyMustRevalidate(): boolean {
    return this._proxyMustRevalidate;
  }
  setProxyMustRevalidate(value: boolean) {
    this._proxyMustRevalidate = value;
    return this;
  }
  /* ----------------------------------------------------- */
  getNoStore(): boolean {
    return this._noStore;
  }
  setNoStore(value: boolean) {
    if (value) {
      if (this.getIsPrivate())
        throw new Error(`Cannot set both no-store and private to true`);
      if (this.getNoCache())
        throw new Error(`Cannot set both no-store and no-cache to true`);
      if (this.getMaxAge() === 0)
        throw new Error(`Cannot set both no-store to true and max-age to 0`);
      if (this.getMustRevalidate())
        throw new Error(`Cannot set both no-store and must-revalidate to true`);
    }
    this._noStore = value;
    return this;
  }
  /* ----------------------------------------------------- */
  getIsPrivate(): boolean {
    return this._isPrivate;
  }
  setIsPrivate(value: boolean) {
    if (this._isPublic !== !value) {
      this._isPublic = !value;
    }
    this._isPrivate = value;
    return this;
  }
  /* ----------------------------------------------------- */
  getIsPublic(): boolean {
    return this._isPublic;
  }
  setIsPublic(value: boolean) {
    if (this._isPrivate !== !value) {
      this._isPrivate = !value;
    }
    this._isPublic = value;
    return this;
  }
  /*
  -----------------------------------------------------
  */
  getMustUnderstand(): boolean {
    return this._mustUnderstand;
  }
  setMustUnderstand(value: boolean) {
    this._mustUnderstand = value;
    return this;
  }
  /* ----------------------------------------------------- */
  getNoTransform(): boolean {
    return this._noTransform;
  }
  setNoTransform(value: boolean) {
    this._noTransform = value;
    return this;
  }
  /* ----------------------------------------------------- */
  getImmutable(): boolean {
    return this._immutable;
  }
  setImmutable(value: boolean) {
    this._immutable = value;
    return this;
  }
  /* ----------------------------------------------------- */
  getStaleWhileRevalidate(): boolean {
    return this._staleWhileRevalidate;
  }
  setStaleWhileRevalidate(value: boolean) {
    this._staleWhileRevalidate = value;
    return this;
  }
  /* ----------------------------------------------------- */
  getStaleIfError(): boolean {
    return this._staleIfError;
  }
  setStaleIfError(value: boolean) {
    this._staleIfError = value;
    return this;
  }
  /* ----------------------------------------------------- */
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

  getHeadersObject() {
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
    maxAge?: CacheControlHeader['_maxAge'];
    sharedMaxAge?: CacheControlHeader['_sharedMaxAge'];
    noCache?: CacheControlHeader['_noCache'];
    mustRevalidate?: CacheControlHeader['_mustRevalidate'];
    proxyMustRevalidate?: CacheControlHeader['_proxyMustRevalidate'];
    noStore?: CacheControlHeader['_noStore'];
    isPrivate?: CacheControlHeader['_isPrivate'];
    isPublic?: CacheControlHeader['_isPublic'];
    mustUnderstand?: CacheControlHeader['_mustUnderstand'];
    noTransform?: CacheControlHeader['_noTransform'];
    immutable?: CacheControlHeader['_immutable'];
    staleWhileRevalidate?: CacheControlHeader['_staleWhileRevalidate'];
    staleIfError?: CacheControlHeader['_staleIfError'];
  }) {
    super();
    this.setMaxAge(maxAge);
    this.setSharedMaxAge(sharedMaxAge);
    if (noCache) this.setNoCache(noCache);
    if (mustRevalidate) this.setMustRevalidate(mustRevalidate);
    if (proxyMustRevalidate) this.setProxyMustRevalidate(proxyMustRevalidate);
    if (noStore) this.setNoStore(noStore);
    if (isPrivate) this.setIsPrivate(isPrivate);
    if (isPublic) this.setIsPublic(isPublic);
    if (mustUnderstand) this.setMustUnderstand(mustUnderstand);
    if (noTransform) this.setNoTransform(noTransform);
    if (immutable) this.setImmutable(immutable);
    if (staleWhileRevalidate)
      this.setStaleWhileRevalidate(staleWhileRevalidate);
    if (staleIfError) this.setStaleIfError(staleIfError);
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
