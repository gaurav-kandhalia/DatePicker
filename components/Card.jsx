
import React from 'react';

import DivSpan from './Pattern';
import { useDatePicker } from '@/context/context';

export default function Card() {

    const {patternSelected} = useDatePicker();

    const pattern = [
        { val: "daily" },
        { val: "Weekly" },
        { val: "Monthly" },
        { val: "Yearly" },
    ];
 
    return (
        <div className='flex flex-col gap-2 text-center'>
            <span className='text-xl font-bold'>Mark Your Dates</span>
            <div className='flex gap-4 '>
                {pattern.map((item) => (
                    <DivSpan key={item.val} value={item.val}  />
                ))}
            </div>
        </div>
    );
}
