export const sortingPrices = (a, b) => {
  const firstNumber = Number(a);
  const secondNumber = Number(b);
  if (firstNumber > secondNumber) return -1;
  if (secondNumber > firstNumber) return 1;
  return 0;
};


export const InputAttributes = [
  {
    label: "Country",
    name: "country",
  },
  {
    label: "City",
    name: "cityName",
  },
  {
    label: "Image Url",
    name: "image",
  },
  {
    label: "Price",
    name: "vacationprice",
  },
];