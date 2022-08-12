import { isNil, omitBy } from 'lodash';
import { Age } from './age.class';
import { CacheControlHeader } from './cache-control.class';
import { ClearSiteData } from './clear-site-data.class';
import { HTTP_STATUS_CODE } from './http_status_codes';

export class HttpHeaders {
  private cacheControl?: CacheControlHeader;
  private age?: Age;
  private clearSiteData?: ClearSiteData;

  public static HTTP_STATUS_CODES = HTTP_STATUS_CODE;
  constructor(
    headers: Partial<{
      'Cache-Control': (builder: CacheControlHeader) => CacheControlHeader;
      Age: (builder: Age) => Age;
      'Clear-Site-Data': (builder: ClearSiteData) => ClearSiteData;
    }>
  ) {
    this.cacheControl = headers?.['Cache-Control']?.(
      new CacheControlHeader({})
    );

    this.age = headers?.['Age']?.(new Age(0));

    this.clearSiteData = headers?.['Clear-Site-Data']?.(new ClearSiteData({}));
  }

  getHeadersObject() {
    return omitBy(
      {
        'Cache-Control': this.cacheControl?.build(),
        Age: this.age?.build(),
        'Clear-Site-Data': this.clearSiteData?.build(),
      },
      isNil
    );
  }
}
