# Wilkins-Software: Http Headers

A set of classes that can be used to programatically generate HTTP headers, with convienient methods of ease of use and readability.

## Badges

[![npm version](https://badge.fury.io/js/@wilkins-software%2Fhttp-headers.svg)](https://badge.fury.io/js/@wilkins-software%2Fhttp-headers) [![CI](https://github.com/Wilkins-Software/http-headers/actions/workflows/main.yml/badge.svg)](https://github.com/Wilkins-Software/http-headers/actions/workflows/main.yml) [![size](https://github.com/Wilkins-Software/http-headers/actions/workflows/size.yml/badge.svg)](https://github.com/Wilkins-Software/http-headers/actions/workflows/size.yml) ![](https://img.shields.io/github/issues/Wilkins-Software/http-headers) ![](https://img.shields.io/github/forks/Wilkins-Software/http-headers) ![](https://img.shields.io/github/stars/Wilkins-Software/http-headers) ![](https://img.shields.io/github/license/Wilkins-Software/http-headers)

## API Reference

#### HttpHeaders

`HttpHeaders` is this Library's main export/tool. It can be instantiated with any standard response header, and can either accept a builder function or a primitive value appropriate to that header.

Builder functions are unique to each particular header, and provide methods to configure that header without having to manually interpolate strings yourself.

For example to generate the following header object...

```
{
    'Age': '123',
    'Cache-Control': 'max-age=3600, public, immutable',
    'Clear-Site-Data': 'cache',
}
```

You could use the builders as such:

```typescript
const headers = new HttpHeaders({
  Age: (builder) => builder.setAge(123),
  "Cache-Control": (builder) =>
    builder
      .setImmutable(true)
      .setIsPublic(true)
      // Note, setMaxAge is passed TimeConverters for your convenience
      .setMaxAge(({ hours }) => hours(1)),
  "Clear-Site-Data": (builder) => builder.setDirective("cache", true),
});
```

## Extending Fetch Headers

The `HttpHeaders` class extends the built-in `fetch` Headers class, which means you can pass an instance of `HttpHeaders` directly to the `fetch` function as part of the request options.

This allows you to take full advantage of the convenience methods provided by `HttpHeaders` while still leveraging the compatibility and functionality of the native `fetch` API.

Here's an example of using `HttpHeaders` with `fetch`:

```typescript
import { HttpHeaders } from "@wilkins-software/http-headers";

const headers = new HttpHeaders({
  "Content-Type": (builder) => builder.setMimeType("application/json"),
  Authorization: (builder) => builder.setBearerToken("your_token_here"),
});

fetch("https://api.example.com/data", {
  method: "GET",
  headers: headers,
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

In this example, we create an instance of HttpHeaders with the desired headers and pass it directly to the fetch function, simplifying the process of setting up headers for your requests.

##### Currently Supported Headers

| Headers                     | Description                                                                                   |
| --------------------------- | --------------------------------------------------------------------------------------------- |
| `Accept`                    | Media type(s) that is/are acceptable                                                          |
| `Accept-CH`                 | Client Hints headers                                                                          |
| `Accept-CH-Lifetime`        | Lifetime of Client Hints headers                                                              |
| `Accept-Encoding`           | Acceptable content-codings                                                                    |
| `Accept-Language`           | Acceptable languages for response                                                             |
| `Accept-Patch`              | Acceptable patch document formats                                                             |
| `Accept-Post`               | Acceptable media type for POST                                                                |
| `Access-Control-*`          | CORS headers                                                                                  |
| `Age`                       | Age of the response in seconds                                                                |
| `Allow`                     | Valid methods for a specific resource                                                         |
| `Alt-Svc`                   | Alternate service for a resource                                                              |
| `Authorization`             | Authentication credentials for HTTP auth                                                      |
| `Cache-Control`             | Directives for caching mechanisms                                                             |
| `Clear-Site-Data`           | Clearing browsing data                                                                        |
| `Content-Type`              | Media type of the resource                                                                    |
| `Content-Length`            | Length of the response body in octets                                                         |
| `Content-Language`          | Natural language of the intended audience                                                     |
| `Content-Encoding`          | Encodings applied to the data                                                                 |
| `Content-Disposition`       | How to display the response                                                                   |
| `Content-Security-Policy`   | Security policy for the client UI                                                             |
| `Cookie`                    | HTTP cookie previously sent by the server                                                     |
| `DNT`                       | Do Not Track request                                                                          |
| `ETag`                      | Entity tag of the associated resource                                                         |
| `Expect`                    | Expectations for the server to fulfill                                                        |
| `Expires`                   | Date/time after which response is stale                                                       |
| `Forwarded`                 | Discloses original information of a client connecting to a web server through an HTTP proxy   |
| `From`                      | Email address of the user making the request                                                  |
| `Host`                      | Host and port of the resource being requested                                                 |
| `If-*`                      | Conditions for HTTP request headers                                                           |
| `Keep-Alive`                | Keep the connection open after the current transaction finishes                               |
| `Last-Modified`             | Date and time the resource was last modified                                                  |
| `Location`                  | URL of a redirected page                                                                      |
| `Origin`                    | Initiator of the request                                                                      |
| `Pragma`                    | Implementation-specific directives                                                            |
| `Proxy-*`                   | Request and response behavior of connection via proxy                                         |
| `Range`                     | Request only part of an entity                                                                |
| `Referer`                   | Address of the previous web page                                                              |
| `Retry-After`               | If you're rate-limited, when to try again                                                     |
| `Server`                    | Details of the software used by the origin server                                             |
| `Set-Cookie`                | An HTTP cookie                                                                                |
| `Strict-Transport-Security` | HTTP Strict Transport Security                                                                |
| `TE`                        | Transfer encodings the user agent is willing to accept                                        |
| `Trailer`                   | Indicate trailer fields in chunked transfer coding                                            |
| `Transfer-Encoding`         | Form of encoding used to safely transfer the entity to the user                               |
| `Upgrade`                   | Ask the client to upgrade to another protocol                                                 |
| `User-Agent`                | User agent string of the user agent                                                           |
| `Vary`                      | Determine how to match future request headers to decide whether a cached response can be used |
| `Via`                       |

## Authors

- [@mark-wilkins](https://github.com/mwilkins91)
- [@luckyboy125](https://github.com/luckyboy125)
