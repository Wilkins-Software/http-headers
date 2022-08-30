import * as cache_control_class from '../cache-control.class';

// @ponicode
describe('cache_control_class.CacheControlHeader.getHeadersObject', () => {
  let reevaluateInst: any;
  let noStoreInst: any;

  beforeEach(() => {
    reevaluateInst = new cache_control_class.CacheControlHeader({
      maxAge: undefined,
      sharedMaxAge: undefined,
      noCache: undefined,
      mustRevalidate: true,
      proxyMustRevalidate: undefined,
      noStore: false,
      isPrivate: false,
      isPublic: false,
      mustUnderstand: undefined,
      noTransform: false,
      immutable: true,
      staleWhileRevalidate: true,
      staleIfError: undefined,
    });
    noStoreInst = new cache_control_class.CacheControlHeader({
      maxAge: undefined,
      sharedMaxAge: undefined,
      noCache: undefined,
      mustRevalidate: false,
      proxyMustRevalidate: undefined,
      noStore: true,
      isPrivate: false,
      isPublic: false,
      mustUnderstand: undefined,
      noTransform: false,
      immutable: true,
      staleWhileRevalidate: true,
      staleIfError: undefined,
    });
  });

  it('returns correct headers for mustRevalidate: true', () => {
    let result: any = reevaluateInst.getHeadersObject();
    expect(result).toEqual({
      'Cache-Control': 'immutable, stale-while-revalidate',
    });
  });

  it('returns correct headers for noStore: true', () => {
    let result: any = noStoreInst.getHeadersObject();
    expect(result).toEqual({
      'Cache-Control': 'no-store, immutable, stale-while-revalidate',
    });
  });
});
