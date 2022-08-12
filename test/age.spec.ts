import { Age } from '../src/age.class';
describe('Age', () => {
  it('should build a valid Age header', () => {
    const age = new Age(123);
    expect(age.build()).toBe('123');
  });

  it('should build a valid Age header object', () => {
    const age = new Age(123);
    expect(age.getHeadersObject()).toEqual({
      Age: '123',
    });
  });
});
