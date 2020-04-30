import { SearchPipe } from './search.pipe';

describe('SearchPipe', () => {
  const stubData = [
    { name: 'aaaa' },
    { name: 'bbbb' },
    { name: 'cccc' },
    { name: 'dddd' },
  ];

  it('create an instance', () => {
    const pipe = new SearchPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return values if no query given', () => {
    const pipe = new SearchPipe();
    const result = pipe.transform(stubData, '');
    expect(result).toEqual(stubData);
  });

  it('should search for the aaaa', () => {
    const pipe = new SearchPipe();
    const result: any = pipe.transform(stubData, 'a');
    expect(result.length).toBe(1);
    expect(result).toEqual([ { name: 'aaaa' }]);
  });

  it('should search for the aaaa with capitals', () => {
    const pipe = new SearchPipe();
    const result: any = pipe.transform(stubData, 'A');
    expect(result.length).toBe(1);
    expect(result).toEqual([ { name: 'aaaa' }]);
  });
});
