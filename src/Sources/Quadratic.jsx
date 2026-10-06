import Access from '@/pages/Access'
import React from 'react'

export default function Quadratic() {
    const Quad=({a,b,c})=>{
        const d =  Math.sqrt(b*b - 4*a*c);
        return [
            (-b+d)/(2*a),
            (-b-d)/(2*a)
        ];
    };
    return (
        <>
            <Access
                title="Quadratic Equation "
                inputs={[
                    {
                        "name": "a",
                        "label": "Coefficient of X2",
                        "placeholder": "Write Coefficient of X2"
                    },
                    {
                        "name": "b",
                        "label": "Coefficient of X",
                        "placeholder": "Write Coefficient of X"
                    }
                    , {
                        "name": "c",
                        "label": "Constant value ",
                        "placeholder": "Constant Value "
                    }
                ]}
                button_title="Generate"
                output="Value of X1 And X2 is "
                formula={Quad}

            />
        </>
    )
}
