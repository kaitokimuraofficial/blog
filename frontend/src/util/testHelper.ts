export function getRandomString({ length }: { length: number }): string {
  const letters = 'abcdefghijklmnopqrstuvwxyz0123456789';

  const kinds = letters.length;
  let r = '';
  for (let i = 0; i < length; i++) {
    r += letters[Math.floor(Math.random() * kinds)];
  }
  return r;
}
