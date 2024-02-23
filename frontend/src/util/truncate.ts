export function convertToLowerCaseAndRemoveSpaces(input: string): string {
  return input
    .replace(/[a-zA-Z]+/g, (match) => match.toLowerCase())
    .replace(/\s+/g, '');
}
