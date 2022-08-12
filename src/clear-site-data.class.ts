import { BaseHeader } from './base-header.class';

export type Directive = 'cache' | 'cookies' | 'storage' | 'executionContexts';

export type DirectiveObject = Partial<Record<Directive, boolean>> | '*';

export class ClearSiteData extends BaseHeader {
  private _directives?: DirectiveObject;

  constructor(directive?: DirectiveObject) {
    super();
    this._directives = directive;
  }

  getHeadersObject(): Record<string, string> {
    return {
      'Clear-Site-Data': this.build(),
    };
  }

  build(): string {
    if (!this._directives) {
      return '';
    }

    if (this._directives === '*') {
      return '*';
    }

    return Object.entries(this._directives)
      .reduce((acc, [key, value]) => {
        if (value) {
          return [...acc, key];
        }

        return acc;
      }, [] as string[])
      .join(', ');
  }

  setDirective(directive: Directive, value: boolean) {
    if (!this._directives || this._directives === '*') {
      this._directives = {};
    }

    this._directives[directive] = value;
    return this;
  }

  setDirectives(directives: DirectiveObject) {
    this._directives = directives;
    return this;
  }
}
