import { capitalize, filter, isNil } from "lodash";
import { Age } from "./age.class";
import { CacheControlHeader } from "./cache-control.class";
import { ClearSiteData } from "./clear-site-data.class";
import { Expires } from "./expires.class";
import { HTTP_STATUS_CODE } from "./http-status-codes";

export class HttpHeaders extends Headers {
	protected cacheControl?: CacheControlHeader;
	protected age?: Age;
	protected clearSiteData?: ClearSiteData;
	protected expires?: Expires;

	public static HTTP_STATUS_CODES = HTTP_STATUS_CODE;
	constructor(
		headers: Partial<{
      "Cache-Control": (builder: CacheControlHeader) => CacheControlHeader;
      Age: (builder: Age) => Age;
      "Clear-Site-Data": (builder: ClearSiteData) => ClearSiteData;
      Expires: (builder: Expires) => Expires;
    }>
	) {
		const headersInit = filter(
			[
				[
					"Cache-Control",
					headers?.["Cache-Control"]?.(new CacheControlHeader({})).build(),
				],
				["Age", headers?.["Age"]?.(new Age(0)).build()],
				[
					"Clear-Site-Data",
					headers?.["Clear-Site-Data"]?.(new ClearSiteData({})).build(),
				],
				["Expires", headers?.["Expires"]?.(new Expires(new Date())).build()],
			],
			([, value]) => !isNil(value)
		) as [string, string][];

		super(headersInit);
	}

	getHeadersObject() {
		const headers: Record<string, string> = {};
		this.forEach((value, key) => {
			headers[capitalizeWords(key)] = value;
		});

		return headers;
	}
}

function capitalizeWords(input?: string) {
	const words = input?.split(/[-_]/); // Split the string by hyphen or underscore
	const capitalizedWords = words?.map(word => capitalize(word)); // Capitalize each word using lodash's capitalize method
	return capitalizedWords?.join("-") || "-"; // Join the words with hyphen to form the final string
}
