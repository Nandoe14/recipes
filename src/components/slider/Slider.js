import React, { useContext, useRef, useState } from 'react'
import { AppContext } from '../AppContext'
import { SliderCard } from './SliderCard'
import { useCounter } from '../../hooks/useCounter'
import iRow from '../../assets/pass_i2.svg'
import dRow from '../../assets/pass_d2.svg'

export const Slider = () => {

    const { formState } = useContext(AppContext)
    const { howManyCards } = formState

    const passlRef = useRef(null)
    const passrRef = useRef(null)

    const [cardClick, setCardClick] = useState({
        changeShow: false,
    })
    const { changeShow } = cardClick

    const cantCards = Array.apply(null, Array(howManyCards)).map((x, i) => i) // [0,1,2,3...,n]

    const n = cantCards.length

    const { counter, increment, decrement, reset, resetn } = useCounter({
        init: 0,
        n
    })

    const handleClickPass = (val) => {// When clicking on the Slider's pass buttons
        if (!changeShow) {
            if (val) {
                increment(1)// Go forward
            } else {
                decrement(1)// Go backward
            }

            if (counter === 0 && !val) {// If it goes backwards when the counter is at 0.
                resetn()// Reset the counter to the last value
            } else if (counter === n && val) {// If it goes forward when the counter reached max.
                reset()// Reset the counter to the first value
            }
        }
    }

    return (
        <div className="slide">
            <div className="slide-cent">
                <div className="cont">
                    {
                        cantCards.map((unit) =>
                            <SliderCard
                                cardClick={cardClick}
                                counter={counter}
                                howManyCards={howManyCards}
                                i={unit}
                                passlRef={passlRef}
                                passrRef={passrRef}
                                key={unit}
                                setCardClick={setCardClick}
                            />
                        )
                    }
                </div>
                <img ref={passlRef} className="btnld" src={iRow} alt="<" onClick={() => handleClickPass(false)} />
                <img ref={passrRef} className="btnrd" src={dRow} alt=">" onClick={() => handleClickPass(true)} />
            </div>
        </div>
    )
}
