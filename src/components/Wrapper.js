import React, { useRef } from 'react'
import { BGSlider } from './BGSlider'
import { SetForm } from './SetForm'
import { Slider } from './slider/Slider'
import potCoverImg from './../assets/potCover.png'

export const Wrapper = () => {

    const containerRef = useRef(null)

    return (
        <section id="wrapper">
            <div ref={containerRef} className="container">
                <div className="result-side">
                    <Slider />
                    <div className="pot-cover-cont">
                        <img className="pot-cover" src={potCoverImg} alt="potCover" />
                    </div>
                </div>
                <div className="set-side">
                    <div className="set-cont">
                        <div className="set-info">
                            <h2>Nando Recipes</h2>
                            <p className="principal-p">Hi! Search through hundreds of thousands of recipes using advanced filtering and ranking!</p>
                            <SetForm containerRef={containerRef} />
                        </div>
                    </div>
                    <BGSlider />
                </div>
            </div>
        </section>
    )
}
