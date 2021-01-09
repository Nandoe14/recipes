import React, { useContext, useRef } from 'react'
import { BGSlider } from './BGSlider'
import { SetForm } from './SetForm'
import { Slider } from './slider/Slider'
import { AppContext } from './AppContext'
import potCoverImg from './../assets/potCover.png'
import loadingImg from './../assets/loading.gif'

export const Wrapper = () => {

    const { formState } = useContext(AppContext)
    const { loading } = formState

    const containerRef = useRef(null)
    const potCoverContRef = useRef(null)
    const potCoverRef = useRef(null)

    return (
        <section id="wrapper">
            <div ref={containerRef} className="container">
                <div className="result-side">
                    <Slider />
                    <div ref={potCoverContRef} className="pot-cover-cont">
                        <img ref={potCoverRef} className="pot-cover" src={potCoverImg} alt="potCover" />
                    </div>
                </div>
                <div className="set-side">
                    <div className="set-cont">
                        <div className="set-info">
                            <h2>Nando Recipes</h2>
                            <p className="principal-p">Hi! Search through hundreds of thousands of recipes using advanced filtering and ranking!</p>
                            <SetForm containerRef={containerRef} potCoverContRef={potCoverContRef} potCoverRef={potCoverRef} />
                        </div>
                    </div>
                    <BGSlider />
                </div>
                {
                    (loading)
                    &&
                    (
                        <div className="loading">
                            <img src={loadingImg} alt="loading..." />
                        </div>
                    )
                }
            </div>
        </section>
    )
}
