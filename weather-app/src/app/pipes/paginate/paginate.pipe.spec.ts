import { PaginatePipe } from './paginate.pipe';

describe('PaginatePipe', () => {
  const stubData = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' },
    { id: '9' },
    { id: '10' },
  ];

  it('create an instance', () => {
    const pipe = new PaginatePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return values if no rows and current page', () => {
    const pipe = new PaginatePipe();
    const result = pipe.transform(stubData);
    expect(result).toEqual(stubData);
  });

  it('should slice array correctly for first page', () => {
    const pipe = new PaginatePipe();
    const result: any = pipe.transform(stubData, 3, 1);
    expect(result.length).toBe(3);
    expect(result).toEqual([
      { id: '1' },
      { id: '2' },
      { id: '3' },
    ]);
  });

  it('should slice array correctly for second page', () => {
    const pipe = new PaginatePipe();
    const result: any = pipe.transform(stubData, 3, 2);
    expect(result.length).toBe(3);
    expect(result).toEqual([
      { id: '4' },
      { id: '5' },
      { id: '6' },
    ]);
  });
});
