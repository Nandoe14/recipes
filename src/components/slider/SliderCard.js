import React, { useContext, useRef } from 'react'
import { useCardContents } from '../../hooks/useCardContents'
import { AppContext } from '../AppContext'
import close from './../../assets/close3.png'
import vegetarianImg from './../../assets/vegetarian.png'
import veganImg from './../../assets/vegan.png'
import glutenFreeImg from './../../assets/glutenFree.png'
import dairyFreeImg from './../../assets/dairyFree.png'
import veryHealthyImg from './../../assets/veryHealthy.png'
import gapsImg from './../../assets/gaps.png'
import lowFodmapImg from './../../assets/lowFodmap.png'
import chefHatImg from './../../assets/chefHat.png'
import dividerLineImg from './../../assets/dividerLine.png'
import shinyGifImg from './../../assets/shinyGif.gif'
import vHtitleImg from './../../assets/vHtitle.png'

export const SliderCard = ({ i, passlRef, passrRef }) => {

    const { formState, setFormState, counter } = useContext(AppContext)
    const { howManyCards, changeShow, showSparkles } = formState

    const cardRef = useRef(null)// Catching the div with className "card-slider"
    const closeRef = useRef(null)// Catching the img with className "close"
    const dscRef = useRef(null)
    const dsRef = useRef(null)
    const hsGifRef = useRef(null)
    const hsTitleRef = useRef(null)

    const [vegetarianArray, veganArray, glutenFreeArray, dairyFreeArray, veryHealthyArray, gapsArray, lowFodmapArray, titleCardArray, readyInMinutesArray, servingsArray, sourceUrlArray, backgrounds, dishTypesArray, dietsArray, analyzedInstructionsArray] = useCardContents()

    const aIArray = analyzedInstructionsArray[i]?.map(ana => {
        return ana.join(", ")
    })

    const aIArray2 = aIArray?.join(", ").replace(/, , /g, ", ").replace(/, , /g, ", ")

    const handleCardClick = () => {// When clicking on a selected card.
        if (counter === (i + 1)) {
            if (changeShow) {
                cardRef.current.classList.add("box-shadow1")
                cardRef.current.classList.remove("box-shadow2")
            } else {
                cardRef.current.classList.remove("box-shadow1")
                cardRef.current.classList.add("box-shadow2")
            }
            cardRef.current.style.transform = `${!changeShow ? `scale(1.5) translate(${(172 + ((-296 + 296 - 21.1) / (4 / 3) * i))}px, 0px)` : `translate(${(454 - (24 * i)) - ((-296 + 296) - ((-296 + 296) * i))}px , 0)`}`
            cardRef.current.style.zIndex = `${!changeShow ? 500 : (100 - i)}`
            cardRef.current.classList.toggle("cursorp")
            cardRef.current.classList.toggle("transition-cards")
            cardRef.current.classList.toggle("transition-cardc")
            passlRef.current.classList.toggle("passl-open")
            passrRef.current.classList.toggle("passr-open")
            closeRef.current.classList.toggle("show")
            setFormState({
                ...formState,
                changeShow: !changeShow
            })
        }
    }

    const handleMouseEnterdsImg = (left, cont) => {
        dscRef.current.style.left = left
        dsRef.current.innerText = cont
    }

    const handleMouseLeavedsImg = () => {
        dscRef.current.style.left = 0
    }

    const handleMouseEnterVHImg = () => {
        hsGifRef.current.classList.toggle("hs-gif-opacity")
        hsTitleRef.current.classList.toggle("hs-title-width")
        closeRef.current.style.transition = "none"
        closeRef.current.style.zIndex = "3"
    }

    const handleMouseLeaveVHImg = () => {
        hsGifRef.current.classList.toggle("hs-gif-opacity")
        hsTitleRef.current.classList.toggle("hs-title-width")
        closeRef.current.style.transition = "z-index 0.5s ease"
        closeRef.current.style.zIndex = "5"
    }

    return (// The card's DOM is setted in function of card number (i) and total number of cards.
        <div
            ref={cardRef}
            className={`card-slider transition-cardc ${(counter === (i + 1)) ? "box-shadow1 cursorp" : "box-shadow3"}`}
            style={{
                zIndex: `${100 - i}`,
                transform: `${(counter === (i + 1)) ? `translate(${(454 - (24 * i))}px , 0)` : `scale(${1 - (i * 0.007)}) rotateX(4deg) rotateY(60deg) translate(0, ${-(6 * i)}px)`}`,
                marginLeft: `${(i === 0) ? -(((8 * 67) - 24) - (((howManyCards - 2) * (((67 * 24) / 70) + (201 / 70))))) : -296}px`
            }}
            onClick={handleCardClick}
        >
            <div className="cs-wrapper">
                <div className={`title-recipe${(counter === (i + 1) && changeShow) ? " tr-hover" : ""}`} style={{ backgroundImage: `url(${backgrounds[i]})` }}>
                    <div className="diet-slide-wrapper">
                        <span ref={dsRef} className="diet-selected"></span>
                        <div ref={dscRef} className="diet-slide-cont">
                            <div className={`diet-slide${(counter === (i + 1) && changeShow) ? " tr-hover2" : ""}`} style={{ backgroundImage: `url(${backgrounds[i]})` }}></div>
                        </div>
                        <div className="healthy-sign">
                            <img ref={hsGifRef} className="hs-gif" src={shinyGifImg} alt="Shiny Gif" />
                            <img ref={hsTitleRef} className="hs-title" src={vHtitleImg} alt="Very Healthy" />
                        </div>
                    </div>
                    <h3>{titleCardArray[i]}</h3>
                    <div className="diets-stars">
                        {vegetarianArray[i] && <img src={vegetarianImg} alt="vegetarian" onMouseEnter={() => handleMouseEnterdsImg('134px', 'Vegetarian')} onMouseLeave={handleMouseLeavedsImg} />}
                        {veganArray[i] && <img src={veganImg} alt="vegan" onMouseEnter={() => handleMouseEnterdsImg('92px', 'Vegan')} onMouseLeave={handleMouseLeavedsImg} />}
                        {glutenFreeArray[i] && <img src={glutenFreeImg} alt="glutenFree" onMouseEnter={() => handleMouseEnterdsImg('140px', 'Gluten Free')} onMouseLeave={handleMouseLeavedsImg} />}
                        {dairyFreeArray[i] && <img src={dairyFreeImg} alt="dairyFree" onMouseEnter={() => handleMouseEnterdsImg('130px', 'Dairy Free')} onMouseLeave={handleMouseLeavedsImg} />}
                        {(gapsArray[i] === 'yes') && <img src={gapsImg} alt="gaps" onMouseEnter={() => handleMouseEnterdsImg('80px', 'Gaps')} onMouseLeave={handleMouseLeavedsImg} />}
                        {lowFodmapArray[i] && <img src={lowFodmapImg} alt="lowFodmap" onMouseEnter={() => handleMouseEnterdsImg('150px', 'Low Fodmap')} onMouseLeave={handleMouseLeavedsImg} />}
                    </div>
                    <img ref={closeRef} className="close" src={close} alt="X" />
                </div>
                <div className="para-cont">
                    {
                        (servingsArray[i])
                        &&
                        (<div className="line-info-recipe">
                            <img src={chefHatImg} alt="chefHat" />
                            <span className="info-recipe-e">{`${servingsArray[i]} Servings`}</span>
                        </div>)
                    }
                    {
                        (readyInMinutesArray[i])
                        &&
                        (<div className="line-info-recipe">
                            <img src={chefHatImg} alt="chefHat" />
                            <span className="info-recipe-e">{`Ready in ${readyInMinutesArray[i]} minutes`}</span>
                        </div>)
                    }
                    {
                        (dishTypesArray[i])
                        &&
                        (<div className="line-info-recipe">
                            <img src={chefHatImg} alt="chefHat" />
                            <span className="info-recipe-e">{`For ${dishTypesArray[i]}`}</span>
                        </div>)
                    }
                    {
                        (dietsArray[i])
                        &&
                        (<div className="line-info-recipe">
                            <img src={chefHatImg} alt="chefHat" />
                            <span className="info-recipe-e">{`${dietsArray[i]} Diet`}</span>
                        </div>)
                    }
                    {
                        (aIArray2)
                        &&
                        (<div className="line-info-recipe">
                            <img src={chefHatImg} alt="chefHat" />
                            <span className="">{`Some ingredients: ${aIArray2}`}</span>
                        </div>)
                    }
                    <span className="full-recipe"><a href={sourceUrlArray[i]} target="_blank" rel="noreferrer">Full Recipe...</a></span>
                    {(veryHealthyArray[i]) && <img className="very-healthy" src={veryHealthyImg} alt="veryHealthy" onMouseEnter={handleMouseEnterVHImg} onMouseLeave={handleMouseLeaveVHImg} />}
                </div>
                <img className="divider-line" src={dividerLineImg} alt="DividerLine" />
            </div>
            <div
                className={`shadow-card ${(counter === (i + 1)) ? "transition-shadowcardc" : "transition-shadowcards box-shadow4"}`}
                style={{
                    zIndex: `${(changeShow && (counter === (i + 1))) ? 1 : 4}`
                }}
            >
            </div>
            <div
                className={`sparkles-card${showSparkles ? "" : " sparkles-card-opacity"}`}
                style={{
                    zIndex: `${(changeShow && (counter === (i + 1))) ? 1 : 3}`
                }}
            >
            </div>
        </div>
    )
}