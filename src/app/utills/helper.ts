export const getTotalExp = ():string => {
  // Starting date: July 2021 (Month is 0-indexed, so 6 represents July)
  const startDate = new Date(2021, 6);
  const currentDate = new Date(); // Current date

  // Calculate the difference in months
  let totalMonths = (currentDate.getFullYear() - startDate.getFullYear()) * 12;
  totalMonths += currentDate.getMonth() - startDate.getMonth();

  // Convert total months into years and months
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  return `${years}${months > 0 ? `.${months}` : ""}`;
};
