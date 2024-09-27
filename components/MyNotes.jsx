import { useDatePicker } from '@/context/context'

import React from 'react'

export default function MyNotes() {
const {time,todo,pickedDate} = useDatePicker();
console.log("time...",pickedDate)
  return (
    <div className='bg-[#2E2497] p-4 rounded-md'>
      <div className=''>
        <label htmlFor="tasks" className='text-xl font-bold text-blue-400'>My Dates : <span className='text-sm'>{pickedDate}</span></label>
      </div>
  <div>
  <label htmlFor="todo" className='text-lg font-bold text-[#5748F3]'>Todos : </label>
  <div className='shadow-2xl rounded-md p-2 bg-[#382dab] text-wrap'><span className='text-wrap'>{todo}</span>
  <div><span className='text-sm'>{time}</span></div>

  </div>
  
  </div>
  
    </div>
  )
}
