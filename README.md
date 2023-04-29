
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
      'Age': builder => builder.setAge(123),
      'Cache-Control': builder =>
        builder
          .setImmutable(true)
          .setIsPublic(true)
          // Note, setMaxAge is passed TimeConverters for your convenience
          .setMaxAge(({ hours }) => hours(1)),
      'Clear-Site-Data': builder => builder.setDirective('cache', true),
    });

```

## Extending Fetch Headers

The `HttpHeaders` class extends the built-in `fetch` Headers class, which means you can pass an instance of `HttpHeaders` directly to the `fetch` function as part of the request options.

This allows you to take full advantage of the convenience methods provided by `HttpHeaders` while still leveraging the compatibility and functionality of the native `fetch` API.

Here's an example of using `HttpHeaders` with `fetch`:

```typescript
import { HttpHeaders } from '@wilkins-software/http-headers';

const headers = new HttpHeaders({
  'Content-Type': builder => builder.setMimeType('application/json'),
  'Authorization': builder => builder.setBearerToken('your_token_here'),
});

fetch('https://api.example.com/data', {
  method: 'GET',
  headers: headers,
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

In this example, we create an instance of HttpHeaders with the desired headers and pass it directly to the fetch function, simplifying the process of setting up headers for your requests.

##### Currently Supported Headers


| Headers           | Type     |
| :--------         | :------- |
| `Cache-Control`   | `string` |
| `Age`             | `string` |
| `Clear-Site-Data` | `string` |
| `Expires`         | `string` |

## Authors

- [@mark-wilkins](https://github.com/mwilkins91)

