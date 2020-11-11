export const myGetDate = () => {
  let date = ["0", "01", "02", "03", "04", "05", "06", "07", "08", "09"];
  let month = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  let d = new Date();

  let result =
    d.getFullYear() + "-" + month[d.getMonth()] + "-" + date[d.getDate()];
  return result;
};
