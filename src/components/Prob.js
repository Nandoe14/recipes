import React, { useEffect, useState } from 'react'
import { BGSlider } from './../components/BGSlider'

export const Prob = () => {

    const [h2State, setH2State] = useState(10)

    useEffect(() => {
        const lapseLeft = setInterval(() => {
            if (h2State < 100) {
                setH2State(h2State + 0.2)
            } else {
                setH2State(10)
            }
        }, 10);
        return () => {
            clearInterval(lapseLeft)
        }
    }, [h2State])

    const howManyH2 = 10

    const canth2 = Array.apply(null, Array(howManyH2)).map((x, i) => i) // [0,1,2,3...,n]

    return (
        <>
            {
                canth2.map(u =>
                    <h2 key={u} style={{
                        height: `${(100 / howManyH2) + (100 / howManyH2) * u}px`,
                        left: `${((u + 1) % 2) === 0 ? `${h2State}` : `${-h2State}`}px`,
                        zIndex: `${howManyH2 - u}`
                    }}>Nando Recipes
                        <BGSlider />
                    </h2>
                )
            }
        </>
    )
}
