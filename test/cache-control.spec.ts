import { CacheControlHeader } from '../src/cache-control.class';

describe('getters and setters', () => {
  it('Sets private to the opposite of public', () => {
    const cacheControl = new CacheControlHeader({});
    cacheControl.isPrivate = false;
    expect(cacheControl.isPublic).toBe(true);
    cacheControl.isPublic = false;
    expect(cacheControl.isPrivate).toBe(true);
  });

  it('Sets public to the opposite of private', () => {
    const cacheControl = new CacheControlHeader({});
    cacheControl.isPublic = false;
    expect(cacheControl.isPrivate).toBe(true);
    cacheControl.isPrivate = false;
    expect(cacheControl.isPublic).toBe(true);
  });
});

describe('build', () => {
  it('builds a cache control header', () => {
    const cacheControl = new CacheControlHeader({
      isPublic: false,
      isPrivate: true,
      maxAge: 3600,
      sharedMaxAge: 3600,
    });
    expect(cacheControl.build()).toBe('max-age=3600, s-maxage=3600, private');
  });
});

describe('static', () => {
  it('builds a cache control header', () => {
    expect(CacheControlHeader.noCache().getHeadersObject()).toEqual({
      'Cache-Control': 'no-cache',
    });
  });
});
