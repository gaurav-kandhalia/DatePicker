



import { DatePickerProvider } from '@/context/context';
import Calender from '@/components/Calender'


export default function Main() {


  return (
  <DatePickerProvider>
    <Calender/>
   
  </DatePickerProvider>
  )
}


