import React, { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { supabase } from '../../supabaseClient';
import Swal from 'sweetalert2';
export default function Access({ title, button_title, output, inputs, formula }) {
    //data is Storing 
    const [values, setValues] = useState({});
    const [total, setTotal] = useState(0);
    const [data, setData] = useState([]);
    //data is sednding 
    function handleonchange(name, value) {
        setValues((prev) => ({
            ...prev,
            [name]: Number(value)
        }));
    }
    //Calculation part 
    const handleCalculate = async () => {
        //authentication 
        const { data: { user } } = await supabase.auth.getUser();
        const result = formula(values);
        setTotal(result);
        let databaseResullt;
        if (Array.isArray(result)) {
            databaseResullt = JSON.stringify(result);
        } else {
            databaseResullt = result.toFixed(3);
        }
        //Supabase me data save ho rha hai 
        const { error } = await supabase
            .from('Calculator_History')
            .insert([{
                calculator_name: title,
                inputs: values,
                result: databaseResullt,
                user_id: user.id
            }])
        if (error) {
            Swal.fire({
                title: "Something is Wrong ! Check Details ",
                text: error.message,
                icon: "error",
                confirmButtonText: "OK"
            });
        }
    }
    //data fetch kiya jaa rha hai supabase se 
    async function History() {
        const { data: { user } } = await supabase.auth.getUser();
        const { data, error } = await supabase
            .from('Calculator_History')
            .select("*")
            .eq("user_id", user.id)
            .eq("calculator_name", title)
            .order("created_at", { ascending: false })
        setData(() => data)
        if (error) {
            Swal.fire({
                title: "Something is Wrong ! Check Details ",
                text: error.message,
                icon: "error",
                confirmButtonText: "OK"
            });
        }
    }
    useEffect(() => {
        History();
    }, [])
    //Delete 
    const DeleteRecord = async (id) => {
        const { error } = await supabase
            .from("Calculator_History")
            .delete()
            .eq("id", id);
        if (error) {
            Swal.fire({
                title: "Something is Wrong ! Check Details ",
                text: error.message,
                icon: "error",
                confirmButtonText: "OK"
            });
            return;
        }
        History();
    };
    //for real time upadation 
    useEffect(() => {
        const channel = supabase
            .channel("Calculator")
            .on(
                "postgres_changes",
                {
                    event: "INSERT",
                    schema: "public",
                    table: "Calculator_History",
                },
                (payload) => {
                    alert("Successfull");
                    setData((current) => [
                        ...current,
                        payload.new
                    ]);
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, [DeleteRecord,History]);
    return (
        <>
            <h1 className='flex justify-center p-3 font-extrabold  lg:text-4xl sm:text-2xl bg-green-300 mb-2'>{title} </h1>
            {inputs.map((input) => {
                return <div className='text-center' key={input.name}>
                    <div className='p-2 rounded-2xl gap-2 text-center m-2'>
                        <h1 className='lg:text-4xl sm:text-2xl m-1 lg:text-cyan-300  text-2xl text-yellow-300 sm:text-fuchsia-400'>{input.label} </h1>
                        <Input type="number" placeholder={input.placeholder}
                            value={values[input.name] ?? ""}
                            onChange={(e) => handleonchange(input.name, (e.target.value))}
                        />
                    </div>
                </div>
            })}

            <h1 className='m-2 p-3 lg:text-3xl sm:text-2xl lg:text-lime-400 text-olive-400'>{output}: <span
                className='text-4xl'
            >{Array.isArray(total) ? total.map((value, index) => (
                <div key={index}>
                    x{index + 1} = {Number(value).toFixed(3)}
                </div>
            )) : total}</span></h1>
            <Button variant='secondary' className="w-50 font-bold text-2xl bg-cyan-500" onClick={handleCalculate}>{button_title}</Button>
            <div>
                <h1 className='mt-4 rounded p-3 text-2xl bg-accent text-black font-extrabold'>History {title}</h1>
                {title && (data.map((item) => {
                    return <div key={item.id} className='flex gap-2 lg:gap-10 flex-wrap items-center'>
                        <div>{Array.isArray(item.result) ?
                            item.result.map((value, i) => (
                                <p key={i}>
                                    result : {i + 1}:{value}
                                </p>
                            )) : `result : ${item.result}`}
                        </div>
                        {Object.entries(item.inputs).map(([key, value]) => (
                            <p key={key}>
                                <strong>{key}:</strong> {String(value)}
                            </p>
                        ))}
                        <Button variant='destructive' onClick={() => DeleteRecord(item.id)}>Delete</Button>
                    </div>
                }))}
            </div>
        </>
    )
}
