import { isNil, omitBy } from 'lodash';
import { Age } from './age.class';
import { CacheControlHeader } from './cache-control.class';
import { ClearSiteData } from './clear-site-data.class';
import { Expires } from './expires.class';
import { HTTP_STATUS_CODE } from './http-status-codes';

export class HttpHeaders {
  protected cacheControl?: CacheControlHeader;
  protected age?: Age;
  protected clearSiteData?: ClearSiteData;
  protected expires?: Expires;

  public static HTTP_STATUS_CODES = HTTP_STATUS_CODE;
  constructor(
    headers: Partial<{
      'Cache-Control': (builder: CacheControlHeader) => CacheControlHeader;
      Age: (builder: Age) => Age;
      'Clear-Site-Data': (builder: ClearSiteData) => ClearSiteData;
      Expires: (builder: Expires) => Expires;
    }>
  ) {
    this.cacheControl = headers?.['Cache-Control']?.(
      new CacheControlHeader({})
    );

    this.age = headers?.['Age']?.(new Age(0));

    this.clearSiteData = headers?.['Clear-Site-Data']?.(new ClearSiteData({}));

    this.expires = headers?.['Expires']?.(new Expires(new Date()));
  }

  getHeadersObject() {
    return omitBy(
      {
        'Cache-Control': this.cacheControl?.build(),
        Age: this.age?.build(),
        'Clear-Site-Data': this.clearSiteData?.build(),
        Expires: this.expires?.build(),
      },
      isNil
    );
  }
}
