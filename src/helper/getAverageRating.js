export const getAverageRating = (array, label) => {
  const getSum = (accumulator, currentValue) =>
    accumulator + currentValue[label];
  let average = array.reduce(getSum, 0) / array.length; // get sum of each element, param 0 is initial value
  let rounded = Math.round(average); //round integer type

  return rounded;
};

export const getAverageTotalRating = (array) => {
  let qualityOfEducationFactor = getAverageRating(array, 'qualityOfEducation');
  let infrastructureFactor = getAverageRating(array, 'infrastructure');
  let feeFactor = getAverageRating(array, 'fee');
  let activitiesFactor = getAverageRating(array, 'activities');
  let jobOpportunitiesFactor = getAverageRating(array, 'jobOpportunities');

  let total =
    qualityOfEducationFactor +
    infrastructureFactor +
    feeFactor +
    activitiesFactor +
    jobOpportunitiesFactor;
  let average = total / 5;
  return average;
};
