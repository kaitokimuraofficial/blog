import { render, screen } from '@testing-library/react';
import { Markdown } from './markdown';

test('ヘディングが表示される', () => {
  const body = '# This is heading';

  render(Markdown({ body: body }));
  expect(screen.getByRole('heading'));
  expect(screen.getByText('This is heading'));
});
