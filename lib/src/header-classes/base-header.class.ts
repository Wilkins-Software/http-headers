export abstract class BaseHeader {
  abstract getHeadersObject(): Record<string, string>;
  abstract build(): string;
}
