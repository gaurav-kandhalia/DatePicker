const getAllDatesInRange = ({ startDate, endDate, daysOfWeek, selectedMonths, interval ,patternSelected,pickedDate}) => {
  
  const start = new Date(startDate);
  const end = new Date(endDate);
  const dates = [];
  if (patternSelected === 'daily') {
    
    console.log("Picked Date:", pickedDate);
    
 
    for (let currentDate = new Date(startDate); currentDate <= new Date(endDate); currentDate.setDate(currentDate.getDate() + 1)) {
        dates.push(new Date(currentDate));
        if (interval > 0 ) {
        currentDate.setDate(currentDate.getDate() + interval * 1 - 1); 
    }if (interval > 0 && daysOfWeek.length > 0) {
        currentDate.setDate(currentDate.getDate() + interval * 7 - 1); 
    }
    }

    


    return dates;
}



  else{
    const weekDaysSet = new Set(daysOfWeek);


    const isMatchingWeekday = (date) => {
        const options = { weekday: 'long' };
        const dayName = new Intl.DateTimeFormat('en-US', options).format(date);
        return weekDaysSet.has(dayName);
    };
  
   
    const isMatchingMonth = (date) => {
        const month = date.getMonth(); // 0-11
        return selectedMonths.includes(month);
    };
  
  
    for (let currentDate = new Date(start); currentDate <= end; currentDate.setDate(currentDate.getDate() + 1)) {
        if (
            (daysOfWeek.length > 0 && isMatchingWeekday(currentDate)) ||
            (selectedMonths.length > 0 && isMatchingMonth(currentDate))
        ) {
            dates.push(new Date(currentDate)); 
  
            if (interval > 0 && daysOfWeek.length > 0) {
                currentDate.setDate(currentDate.getDate() + interval * 7 - 1); 
            }
        }
    }
  
    return dates;
}



if (patternSelected === 'yearly') {
    for (let currentDate = new Date(start); currentDate <= end; currentDate.setFullYear(currentDate.getFullYear() + 1)) {
      if (selectedMonths.length > 0) {
        if (isMatchingMonth(currentDate)) {
          dates.push(new Date(currentDate));
        }
      } else {
        dates.push(new Date(currentDate));
      }

      if (interval > 0) {
        currentDate.setFullYear(currentDate.getFullYear() + interval - 1); // Yearly interval logic
      }
    }
    return dates;
  }
};




export {getAllDatesInRange}

