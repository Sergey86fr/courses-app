export const declensionWords = (
  number: number,
  title: [string, string, string]
) => {
  const cases = [2, 0, 1];
  return title[
    number % 100 >= 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
};
