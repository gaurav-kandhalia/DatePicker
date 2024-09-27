"use client"
import { createContext ,useState,useContext} from "react";
const DatePickerContext = createContext();
export const useDatePicker = () => useContext(DatePickerContext);
export const DatePickerProvider = ({ children }) => {
    const [pickedDate,setPickedDate] = useState(null)
    const [patternSelected,setPatternSelected] = useState('');
    const [visibility,setvisibility]  = useState('hidden');
    const [time,setTime]  = useState(null);
    const [interval,setInterval] = useState(0)
     const [todo,setTodo] = useState(null);
     const [endDate,setEndDate] = useState(null)
     const [startDate,setStartDate] = useState(null)
     const [selectedWeekDays,setSelectedWeekDays] = useState([])
     const [selectedMonths,setSelectedMonth] = useState([])
     const [count,setCount]  = useState(0);
     const [showTask,setShowTask] = useState(false);
     const [bg,setBg] = useState('bg-none')
     const [showSelection,setShowSelection] = useState(false)
    const [data,setData] =useState({
      pickedDate:pickedDate,
      startDate:startDate,
      endDate:endDate,
      Time:time,
      Interval:interval,
      Todo:todo,
      duration:patternSelected,
      weeks:selectedWeekDays,
      months:selectedMonths
    })

    const[resultDates,setResultDates] = useState([]);

  
    const value = {
      pickedDate,
      patternSelected,
       setPickedDate,
       setPatternSelected,
       visibility,setvisibility,
       interval,setInterval,
       todo,setTodo,
       time,setTime,
       data,setData,
       endDate,setEndDate,
       selectedWeekDays,setSelectedWeekDays,
       selectedMonths,setSelectedMonth,
       startDate,setStartDate,
       resultDates,setResultDates,
       count,setCount,
       showTask,setShowTask,
       bg,setBg,
       showSelection,setShowSelection

    };



  
    return (
      <DatePickerContext.Provider value={value}>
        {children}
      </DatePickerContext.Provider>
    );
  };