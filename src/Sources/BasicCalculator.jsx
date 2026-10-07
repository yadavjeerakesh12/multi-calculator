import { useState } from "react";
import { Input } from "@/components/ui/input";

function BaiscCalculator() {
    const [value, setValue] = useState("");
    const data = [
        "C", "DEL", "%", "/",
        "7", "8", "9", "*",
        "4", "5", "6", "-",
        "1", "2", "3", "+",
        "0", ".", "="
    ];

    const handleClick = (item) => {

        // Clear
        if (item === "C") {
            setValue("");
            return;
        }

        // Delete last character
        if (item === "DEL") {
            setValue(value.slice(0, -1));
            return;
        }

     // Calculate
        if (item === "=") {
            try {
                setValue(String(eval(value)));
            } catch {
                setValue("Error");
            }
            return;
        }
        if (value === "Error") {
            setValue(item);
            return;
        }
        setValue(value + item);
    };

    return (
        <div className="w-full min-h-screen flex justify-center items-center px-4">

            <div className="w-full max-w-sm border-2 rounded-xl p-4 shadow-lg">
                <h1
                    title="Perform + - * % /"
                    className="text-2xl sm:text-3xl font-bold text-center mb-4"
                >
                    Basic Calculator
                </h1>
                <div className="mb-4">
                    <Input
                        type="text"
                        value={value}
                        readOnly
                        className="w-full text-right text-xl font-bold h-14"
                        placeholder="0"
                    />
                </div>
                <div className="grid grid-cols-4 gap-2">
                    {data.map((item) => (
                        <button
                            key={item}
                            onClick={() => handleClick(item)}
                            className={` h - 12 sm: h - 14 rounded - lg font - bold text - lg border hover: bg - gray - 200 active: scale - 95 transition
                ${item === "=" ? "col-span-2 bg-blue-500 text-white hover:bg-blue-600" : ""}`}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BaiscCalculator;

