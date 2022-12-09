const toHoursAndMinutes = (totalMinutes) => {
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);

  return hours >= 1 ? `${hours}ч:${minutes}мин.` : `${minutes}мин.`;
};

export { toHoursAndMinutes };
