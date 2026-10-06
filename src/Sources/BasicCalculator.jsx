import { Input } from '@/components/ui/input';
import React from 'react'
import { Button } from '@/components/ui/button';
export default function BasicCalculator() {
    const data = ['AC','!',"/","7","8","9","*","4","5","6","-","1","2","3","+","%","0","="];
    return (
        <>
        <div className='flex flex-wrap justify-center items-center h-screen'>
            <div>
                <h1 title='Perform + - * % /'>Basic Calculator</h1>
                <div>
                    <div>
                        < Input type="text"/>
                    </div>
                    <div>
                        {data.map((item)=>(
                            <div key={item} className='grid grid-cols-3'>
                                <button className='grid grid-cols-3'>{item}</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
