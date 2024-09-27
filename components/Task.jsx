import React from 'react';
import Input from './Input';
import { useDatePicker } from "@/context/context";
import DropDown from "./DropDown"
import{getAllDatesInRange}from '@/utils/CalculateRecurringDates';
import Selected from './Selected'

export default function Task() {
    const { setShowTask,patternSelected, interval, setInterval, time, setTime, todo, setTodo,data,setData ,pickedDate,setEndDate,endDate,startDate,setStartDate,selectedWeekDays,selectedMonths,setPatternSelected,setSelectedMonth,setResultDates,setSelectedWeekDays,setCount,setShowSelection} = useDatePicker();

    const months = [
        "March", "April", "May", "June", "July", "August", 
        "September", "October", "November", "December", 
        "January", "February"
      ];
      const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    const handleSet = ()=>{
        setData({
            pickedDate:pickedDate,
            Time: time,      
            Interval: interval, 
            Todo: todo ,  
            startDate:startDate,
            endDate:endDate  ,
            duration:patternSelected,
            weeks:selectedWeekDays,
            months:selectedMonths
        });
     

       
    }   
    const selectedInterval = (e) => {
        const selectedValue = e.target.value;
        setInterval(selectedValue);  
      
    };
   const selectTime = (e) => {
        const selectedValue = e.target.value;
        setTime(selectedValue);  

    };
       const selectTodo = (e) => {
        const selectedValue = e.target.value;
        setTodo(selectedValue);  

    };
    const selectEndDate = (e)=>{
        const selectedValue = e.target.value;
        setEndDate(selectedValue);
    }

    const handleSelect = (option) => {
        setSelectedValue(option);
      };

      const handleAdd = ()=>{
        setShowTask(true)
        setShowSelection(false)
        const allDates = getAllDatesInRange({
            startDate: startDate,
            endDate: endDate,
            daysOfWeek: selectedWeekDays && selectedWeekDays.length > 0 ? selectedWeekDays : '',
            selectedMonths:selectedMonths && selectedMonths.length > 0 
            ? selectedMonths.map(month => months.indexOf(month)) 
            : [], 
            interval: interval || 0,
            patternSelected:patternSelected,
            pickedDate:pickedDate,
        });

        

        const finalDates =  allDates.map(date => {
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0'); 
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        });

       
        setResultDates(finalDates)

        setCount(1)
      }

      const handleReset = ()=>{
        setShowTask(false)
        pickedDate:pickedDate,
         
            setTime(null);
            setInterval(0);
            setTodo('');
            setStartDate(null);
            setEndDate(null);
            setPatternSelected('');
            setSelectedWeekDays([null]);
            setSelectedMonth([null]);
      }

    return (
        <div className=" bg-[#f3f1f1] rounded-xl  flex flex-col justify-center p-8">
           <div className='text-center'>
           <span className='text-base font-bold text-[#2E2497]'>Mark Up:{ patternSelected}</span>

           </div>
         
           <div className='text-blue-700 font-bold flex justify-center mt-4'>
           <Input 
                type="time" 
                placeholder="Set time"
                handleChange={selectTime} 
             
            />
           </div>

            <div className="mt-8 text-blue-700 font-bold flex justify-center">
                
                <Input 
                    type="text" 
                    placeholder="Set Task" 
                    handleChange={selectTodo}  

                />
            </div>

            <div className="mt-2 text-blue-700 font-bold flex justify-center">
                
                    <Input 
                        type="number" 
                        placeholder="Set interval" 
                        handleChange={selectedInterval}  
                    />
            
            </div>

<div className='mt-2 text-base font-bold text-center p-8 '>
<label htmlFor="Range">Select Range </label>
</div>
           <div className='flex gap-4 flex-col w-full  mt-2 justify-center items-center'>
          

            <div className='mt-2 w-full'>
           <Input type={'date'} placeholder={'select Start Date'} handleChange={(e) => setStartDate(e.target.value)} />

            </div>
            <div className='mt-2 w-full'>
                <Input type={'date'} placeholder={'select End Date'}handleChange={(e) => setEndDate(e.target.value)}  />
            </div>
              
           </div>
           <div className=' flex flex-col justify-center  gap-4   text-xl mt-2  w-full border bg-black'>
      {patternSelected === 'Weekly' && (
        <DropDown options={daysOfWeek}  />
      )}
      {(patternSelected === 'Monthly'|| patternSelected==='Yearly') && (
        <>
         <DropDown options={daysOfWeek}  />
         <DropDown options={months} />
        </>
      )}
    
    </div>

            <div className='border w-40 p-2 text-xl mt-2 mx-auto rounded-md bg-[#5748F3] text-center' onClick={handleSet}>Set</div>
            <div className='border w-40 p-2 text-xl mt-2 mx-auto rounded-md bg-[#5748F3] text-center' onClick={handleAdd}>Add</div>
            <div className='border w-40 p-2 text-xl mt-2 mx-auto rounded-md bg-[#5748F3] text-center' onClick={handleReset}>Reset</div>
            
   

          
            
        </div>
    );
}
