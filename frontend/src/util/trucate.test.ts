import { Truncate } from './truncate';

test('Truncate input', () => {
  expect(Truncate('hello')).toBe('hello');
});
