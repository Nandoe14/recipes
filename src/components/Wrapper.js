import React, { useContext, useRef } from 'react'
import { BGSlider } from './BGSlider'
import { SetForm } from './SetForm'
import { Slider } from './slider/Slider'
import { AppContext } from './AppContext'
import potCoverImg from './../assets/potCover.png'
import loadingImg from './../assets/loading.gif'
import choppingPlateImg from './../assets/choppingPlate.png'
import goBackImg from './../assets/goBack.png'

export const Wrapper = () => {

    const { formState } = useContext(AppContext)
    const { loading } = formState

    const containerRef = useRef(null)
    const potCoverContRef = useRef(null)
    const potCoverRef = useRef(null)
    const choppingTableRef = useRef(null)
    const goBackRef = useRef(null)
    const btdRef = useRef(null)

    const handleMouseEnterCT = () => {
        choppingTableRef.current.classList.toggle("show-choppingt")
        goBackRef.current.classList.toggle("show-goback")
    }

    const handleMouseLeaveCT = () => {
        choppingTableRef.current.classList.toggle("show-choppingt")
        goBackRef.current.classList.toggle("show-goback")
    }

    const handleClickCT = () => {
        containerRef.current.classList.toggle("animate-container-results")
        containerRef.current.classList.toggle("animate-container-goback")
        btdRef.current.classList.toggle("show-btd")
        setTimeout(() => {
            potCoverRef.current.classList.toggle("remove-pot-top")
            potCoverContRef.current.classList.toggle("remove-pt-cont")
            btdRef.current.classList.toggle("show-btd")
        }, 2000);
    }

    return (
        <section id="wrapper">
            <div ref={containerRef} className="container">
                <div className="result-side">
                    <Slider />
                    <div ref={potCoverContRef} className="pot-cover-cont">
                        <img ref={potCoverRef} className="pot-cover" src={potCoverImg} alt="potCover" />
                    </div>
                    <div
                        ref={choppingTableRef}
                        className="gb-cont"
                        onMouseEnter={handleMouseEnterCT}
                        onMouseLeave={handleMouseLeaveCT}
                        onClick={handleClickCT}
                    >
                        <img
                            className="chopping-plate"
                            src={choppingPlateImg} alt="Chopping Plate"
                        />
                        <div ref={goBackRef} className="go-back-cont">
                            <img className="go-back" src={goBackImg} alt="Go Back" />
                        </div>
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
            <div ref={btdRef} className="black-transition-div"></div>
        </section>
    )
}
