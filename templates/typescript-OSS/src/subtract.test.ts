import { subtract } from './subtract';

describe('src/index', () => {
  describe('add should', () => {
    test('return 0 when we subtract 1 from 1', async () => {
      expect(subtract(1, 1)).toEqual(0);
    });

    test('return 1 when we subtract 2 from 3', async () => {
      expect(subtract(2, 3)).toEqual(1);
    });
  });
});
