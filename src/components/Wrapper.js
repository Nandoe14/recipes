import React from 'react'
import { BGSlider } from './BGSlider'
import { Slider } from './slider/Slider'

export const Wrapper = () => {
    return (
        <section id="wrapper">
            <div className="set-side">

            </div>
            <div className="result-side">
                <Slider />
            </div>
            <BGSlider />
        </section>
    )
}
