
"use client";  

import { DatePickerProvider } from '@/context/context';
import Calender from './Calender';

const DatePickerWrapper = ({ children }) => {
  return (
    <DatePickerProvider>
  <Calender/>
    </DatePickerProvider>
  );
};

export default DatePickerWrapper;
