import { addition } from "./first-function";


describe('test addition', () => {
  it('testing addition', () => {
    expect(addition(10,20)).toBe(30);
  });
});
