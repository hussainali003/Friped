const formatDate = (date) => {
  if (!(date instanceof Date) || isNaN(date)) {return '';}

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

export default formatDate;
