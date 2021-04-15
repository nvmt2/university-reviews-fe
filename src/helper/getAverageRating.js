export const getAverageRating = (array, label) => {
  const getSum = (accumulator, currentValue) =>
    accumulator + currentValue[label];
  let calculatedFee = array.reduce(getSum, 0) / array.length; // get sum of each element, param 0 is initial value
  let roundedFee = Math.round(calculatedFee); //round integer type

  return roundedFee;
};
