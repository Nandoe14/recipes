import React, { useContext, useRef } from 'react'
import { AppContext } from '../AppContext'
import { SliderCard } from './SliderCard'
import iRow from '../../assets/pass_i2.svg'
import dRow from '../../assets/pass_d2.svg'

export const Slider = () => {

    const { formState, cantCards, counter, increment, decrement, resetCounter, resetn, n } = useContext(AppContext)
    const { changeShow } = formState

    const passlRef = useRef(null)
    const passrRef = useRef(null)

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
                resetCounter()// Reset the counter to the first value
            }
        }
    }

    return (
        <div className="slide">
            <div className="slide-cent">
                <div className="cont" style={{ transform: `scale(${(window.innerWidth * 0.5) / 1000})` }}>
                    {
                        cantCards.map((unit) =>
                            <SliderCard
                                i={unit}
                                passlRef={passlRef}
                                passrRef={passrRef}
                                key={unit}
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
