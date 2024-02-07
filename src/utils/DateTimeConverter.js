export const formatDateTime = (datetimeStr) => {
  const dateObj = new Date(datetimeStr);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[dateObj.getMonth()].substring(0,3);
  const date = dateObj.getDate();
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const seconds = dateObj.getSeconds();

  // Format the parts with leading zeros if needed
  const formattedDate = date < 10 ? "0" + date : date;
  const formattedHours = hours < 10 ? "0" + hours : hours;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

  return `${month} ${formattedDate} - ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};

// const datetimeStr = '2024-02-07T09:42:34';
// const formattedDatetime = formatDateTime(datetimeStr);
// console.log(formattedDatetime);
