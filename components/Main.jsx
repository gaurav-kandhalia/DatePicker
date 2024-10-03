import dynamic from 'next/dynamic';
import { DatePickerProvider } from '@/context/context';

const Calendar = dynamic(() => import('./Calendar'), { ssr: false });

export default function Main() {
  return (
    <DatePickerProvider>
      <Calendar /> 
    </DatePickerProvider>
  );
}
