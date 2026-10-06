import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
export default function Home() {
    const data = [
        {
            "id": 1,
            "name": "Basic Calculator",
            "symbol": "+ - x % ",
            "src": "/basicCalculator",
            "img":"🧮"

        },
        {
            "id": 2,
            "name": "Percentage Calculator",
            "symbol": " (Part / Total) × 100",
            "src": "/percentage",
            "img":"%"
        },
        {
            "id": 3,
            "name": "Simple Interest Calculator",
            "symbol": "(P × R × T) / 100 ",
            "src": "/simple",
            "img":"💰"
        },
        {
            "id": 4,
            "name": "Compound Interest",
            "symbol": "P(1 + R/100)^T",
            "src": "/compound",
            "img":"📈"
        },
        {
            "id": 5,
            "name": "BMI Calculator",
            "symbol": "Weight / Height²",
            "src": "/bmi",
            "img":"⚖️"
        },
        {
            "id": 6,
            "name": "AGE Calculator",
            "symbol": "Current Date − Date of Birth",
            "src": "/age",
            "img":"🎂"
        },
        {
            "id": 7,
            "name": "Loan/EMI Calculator",
            "symbol": "P × R × (1 + R)^N / ((1 + R)^N − 1)",
            "src": "/loan",
            "img":"🏦"
        },
        {
            "id": 8,
            "name": "GST Calculator",
            "symbol": "(Price × GST%) / 100",
            "src": "/gst",
            "img":"🧾"
        },
        {
            "id": 9,
            "name": "Discount Calculator",
            "symbol": "(Original Price × Discount%) / 100",
            "src": "/discount",
            "img":"🏷️"
        },
        {
            "id": 10,
            "name": "Profit/Loss Calculator",
            "symbol": "(Profit / Cost Price) × 100",
            "src": "/profit",
            "img":"📊"
        },
        {
            "id": 11,
            "name": "Area Of Circle",
            "symbol": "πr²",
            "src": "/circle",
            "img":"⭕"
        },
        {
            "id": 12,
            "name": "Area of Rectangle",
            "symbol": "Length × Breadth",
            "src": "/rectangle",
            "img":"▭"
        },
        {
            "id": 13,
            "name": "Area of Triangle ",
            "symbol": "½ × Base × Height",
            "src": "/triangle",
            "img":"🔺"
        },
        {
            "id": 14,
            "name": "Distance Calculator",
            "symbol": "Speed × Time",
            "src": "/distance",
            "img":"📍"
        },
        {
            "id": 15,
            "name": "Speed Calculator",
            "symbol": "Distance / Time",
            "src": "/speed",
            "img":"🚗"
        },
        {
            "id": 16,
            "name": "Time  Calculator",
            "symbol": "Distance / Speed",
            "src": "/time",
            "img":"⏱️"
        },
        {
            "id": 17,
            "name": "Temperature Converter ",
            "symbol": "F = (C × 9/5) + 32",
            "src": "/temperature",
            "img":"🌡️"
        },
        {
            "id": 18,
            "name": "Scientific Calculator",
            "symbol": "sin(0) cos(0) tan(0)  √x  x²  xʸ",
            "src": "/scientific",
            "img":"🔬"
        },
        {
            "id": 19,
            "name": "Currency Calculator",
            "symbol": "Amount × Exchange Rate",
            "src": "/currency",
            "img":"💱"
        },
        {
            "id": 20,
            "name": "Unit Converter ",
            "symbol": "1 km = 1000 m",
            "src": "/unit",
            "img":"🔄"
        }
        ,
        {
            "id": 21,
            "name": "Quadratic",
            "symbol": "ax² + bx + c = 0",
            "src": "/quadratic",
            "img":"x²"
        }
    ]
    return (
        <>
            {/* <div className=' h-full w-full flex justify-around gap-5 items-center flex-wrap '>
                {data.map((item) => {
                    return <div key={item.id} className='flex flex-col justify-center 
                bg-cyan-800 text-white p-3 mt-4 rounded-2xl h-40 w-50
                '>
                        <h1 className='font-bold font-sans
                        
                        '><span>{item.id} {". "}</span>{item.name}</h1>
                        <p className='flex items-center justify-center m-2
                        bg-emerald-300 p-1 rounded space-x-1 hover:text-red-700
                        '>{item.symbol}</p>
                        <Link to={item.src}>
                            <Button variant='ghost' className="font-extrabold 
                            w-full
                            ">View</Button>
                        </Link>

                    </div>
                })}
            </div> */}

            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-4 py-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {data.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className=" group relative flex min-h-55 flex-col overflow-hidden rounded-3xl border border-cyan-400/20 bg-linear-to-br from-cyan-950 via-cyan-900 to-slate-900 p-5 text-white shadow-lg shadow-cyan-950/20 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300/50 hover:shadow-2xl hover:shadow-cyan-500/20">
                            {/* Glow Effect */}
                            <div
                                className=" absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-400/20 blur-2xl transition-all duration-300 group-hover:bg-cyan-300/40" />
                            {/* Calculator Number */}
                            <div className="relative z-10 mb-4 flex items-center justify-between">
                                <span
                                    className=" flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/20 text-sm font-bold text-cyan-300 ring-1 ring-cyan-300/30">
                                    {item.id}
                                </span>
                                <span className="text-xl opacity-50 transition group-hover:opacity-100">
                                    {item.img}
                                </span>
                            </div>
                            {/* Title */}
                            <div className="relative z-10 flex-1">
                                <h2
                                    className=" line-clamp-2 text-lg font-bold leading-6 text-white transition-colors duration-300 group-hover:text-cyan-300">
                                    {item.name}
                                </h2>
                                {/* Symbol */}
                                <div
                                    className=" mt-4 flex min-h-10.5 items-center justify-center rounded-xl border border-emerald-300/20 bg-emerald-400/10 px-3 py-2 text-sm font-semibold text-emerald-300 transition-all duration-300 group-hover:bg-emerald-400/20 group-hover:text-emerald-200" >
                                    {item.symbol}
                                </div>
                            </div>
                            {/* View Button */}
                            <Link to={item.src} className="relative z-10 mt-5">
                                <Button
                                    variant="ghost"
                                    className=" w-full rounded-xl border border-white/10 bg-white/5 font-bold text-white transition-all duration-300 hover:bg-cyan-400 hover:text-slate-950 hover:shadow-lg hover:shadow-cyan-400/20">
                                    View Calculator
                                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                                        →
                                    </span>
                                </Button>
                            </Link>

                        </div>
                    );
                })}
            </div>
        </>
    )
}
