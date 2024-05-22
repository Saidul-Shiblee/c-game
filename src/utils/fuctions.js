export const getTodayDate = () => {
  const date = new Date();

  const malaysiaTimeZone = 'Asia/Kuala_Lumpur';
      const malaysiaTime = new Date(date.toLocaleString('en-US', { timeZone: malaysiaTimeZone }));
      console.log("malay time", malaysiaTime);
      let day = malaysiaTime.getDate();
      let month = malaysiaTime.getMonth() + 1;
      let year = malaysiaTime.getFullYear();

      if (day.toString().length === 1) {
        day = "0" + day;
      }
      if (month.toString().length === 1) {
        month = "0" + month;
      }
      if (year.toString().length === 1) {
        year = "0" + year;
      }

  let currentDate = `${day}-${month}-${year}`;
  return currentDate;;
};

export const getTodayMalaysiaDate = () => {
  const malaysiaTimeZone = 'Asia/Kuala_Lumpur';
  const malaysiaTime = new Date().toLocaleString('en-US', { timeZone: malaysiaTimeZone });
  return new Date(malaysiaTime);
};