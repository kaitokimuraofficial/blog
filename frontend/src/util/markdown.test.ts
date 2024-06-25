import { render, screen } from '@testing-library/react';
import { Markdown } from './markdown';

test('ヘディングが表示される', () => {
  const body = '# This is heading';

  render(Markdown({ body: body }));
  expect(screen.getByRole('heading'));
  expect(screen.getByText('This is heading'));
});

describe('箇条書き', () => {
  test('箇条書きが表示される', () => {
    const body = '- This is first thing\n- This is second';

    render(Markdown({ body: body }));
    expect(screen.getByRole('list'));
    expect(screen.getByText('This is first thing'));
  });

  test('複数の箇条書きが表示される', () => {
    const body = '- This is first thing\n- This is second';

    render(Markdown({ body: body }));
    const lists = screen.getAllByRole('listitem');
    expect(lists).toHaveLength(2);
    expect(screen.getByText('This is first thing'));
  });

  test('ネストした箇条書きが表示される', () => {
    const body = '- This is first thing\n  - This is second';

    render(Markdown({ body: body }));
    const lists = screen.getAllByRole('listitem');
    expect(lists).toHaveLength(2);
    expect(screen.getByText('This is first thing'));
  });
});
