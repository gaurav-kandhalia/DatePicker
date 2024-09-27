import React from 'react'
import { useDatePicker } from '@/context/context'

export default function SelectedValues() {
    const {selectedWeekDays,selectedMonths}  = useDatePicker();
    console.log(selectedMonths,"........")

  return (
    <>
    <div className='bg-[#2E2497] p-4 rounded-md'>
    <div className=' '>
        <label htmlFor="Days" className='font-bold text-[#5748F3] text-xl'>Selected Days</label>
        <div className='   flex flex-col'>
            {
                selectedWeekDays.map((val)=>{
                    return (<>
                   <div className='text-white' key={val}><span>{val}</span></div>
                    </>)
                })
            }
        </div>
        </div>
    <div>
    <label htmlFor="Days" className='font-bold text-[#5748F3] text-xl'>Selected Months</label>
    {
                selectedMonths.map((val)=>{
                    return (<>
                   <div className='text-white' key={val}><span>{val}</span></div>
                    </>)
                })
            }
        </div>
    </div>
   
    
    </>
  )
}
