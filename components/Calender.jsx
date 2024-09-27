import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Card from '@/components/Card'

import { useDatePicker } from "@/context/context";
import Task from "./Task";
import MyNotes from "./MyNotes";
import Selected from './Selected'
import { set } from "mongoose";
export default function Calender() {
   
    const { setPickedDate,patternSelected,setPatternSelected,resultDates,count ,setCount,showTask,setShowTask,showSelection} = useDatePicker();
  
  
    
     
      const selectedDate = (date)=>{
         setCount(()=>{
          return 1;
         })
     
         setPickedDate(date)
         if(patternSelected){
          setPatternSelected(null)
         }

         
      }

      


   
      
    const convertResultDates = () => {
      

      return resultDates.map(dateString => {
        
          try {
              const [day, month, year] = dateString.split('/').map(Number);
              if (isNaN(day) || isNaN(month) || isNaN(year)) {
                  throw new Error("Invalid date components");
              }
              const dateObj = new Date(year, month - 1, day);
             
              return dateObj;
          } catch (error) {
          
              return null; 
          }
      }).filter(date => date !== null); 
  };

  const highLightDates=(date)=>{
    
 const converted = convertDateFormat(date);
 setPickedDate(converted)


 for(let i=0;i<resultDates.length;i++){
 
  if(resultDates[i]===converted){

   setShowTask(true);
   break;
  }
   

 }

 
  }

 
    
  const convertDateFormat = (dateString) => {
      
    const date = new Date(dateString);

    
    const day = String(date.getDate()).padStart(2, '0'); 
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear(); 

   
    return `${day}/${month}/${year}`;
};
    
      return (
        <div className=' pt-10 bg-[#5748f3]'>
          
     <div className="flex  justify-center gap-4">
     <div className="flex flex-col  gap-4  w-1/4 rounded-xl shadow-2xl p-8 bg-[#2e2497]">
      <div className="flex justify-center">
      <Card/>
      </div>
              <div className="flex justify-center">
              {count===0? <DatePicker
          inline
          onChange={(date)=>{
            return selectedDate(date)
          }}
          
     minDate={new Date()}
     maxDate={new Date(2027, 11, 31)}
     highlightDates={convertResultDates()}
   
          /> : <DatePicker onChange={(date)=>{
            return highLightDates(date)
          }} highlightDates={convertResultDates()} inline/>}
              </div>
    
       </div>
       <div className=" w-1/4">
     
     {patternSelected ? <Task/>:''}
    
        </div>
        <div className="w-1/4">
          {showSelection ? <Selected/> : ''}
          {showTask== true ? <MyNotes/>:''}
        </div>

     </div>
      
            </div>
      )
    }