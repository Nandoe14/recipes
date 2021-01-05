import React from 'react'
import { BGSlider } from './BGSlider'
import { SetForm } from './SetForm'
import { Slider } from './slider/Slider'

export const Wrapper = () => {
    return (
        <section id="wrapper">
            <div className="container">
                <div className="result-side">
                    <Slider />
                </div>
                <div className="set-side">
                    <div className="set-cont">
                        <div className="set-info">
                            <h2>Nando Recipes</h2>
                            <p className="principal-p">Hi! Search through hundreds of thousands of recipes using advanced filtering and ranking!</p>
                            <SetForm />
                        </div>
                    </div>
                    <BGSlider />
                </div>
            </div>
        </section>
    )
}
