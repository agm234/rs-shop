import { SortByPopularityPipe } from './sort-by-popularity.pipe';

describe('SortByPopularityPipe', () => {
  it('create an instance', () => {
    const pipe = new SortByPopularityPipe();
    expect(pipe).toBeTruthy();
  });
});
