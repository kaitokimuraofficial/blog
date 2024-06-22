import { convertToLowerCaseAndRemoveSpaces } from "./truncate";

test('trucate input', () => {
    expect(convertToLowerCaseAndRemoveSpaces("hello")).toBe("hello");
});
