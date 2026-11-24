import { test, expect } from 'e2e';

// <p>Line one<br>line two</p>
test('getByText matches the text textContent() reads', async ({ app, screen }) => {
  await app.open('/');
  expect(await screen.getByTestId('address').textContent()).toBe('Line one line two'); // passes
  await expect(screen.getByText('Line one line two')).toHaveCount(1); // fails: 0 matches
});

test('only the glued text matches', async ({ app, screen }) => {
  await app.open('/');
  await expect(screen.getByText('Line oneline two')).toHaveCount(1); // passes, but nobody sees this text
});
