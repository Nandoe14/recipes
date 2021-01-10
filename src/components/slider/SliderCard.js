import React, { useRef } from 'react'
import { useCardContents } from '../../hooks/useCardContents'
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

export const SliderCard = ({ i, counter, cardClick, setCardClick, howManyCards, passlRef, passrRef }) => {

    const cardRef = useRef(null)// Catching the div with className "card-slider"
    const closeRef = useRef(null)// Catching the img with className "close"

    const [vegetarianArray, veganArray, glutenFreeArray, dairyFreeArray, veryHealthyArray, gapsArray, lowFodmapArray, titleCardArray, readyInMinutesArray, servingsArray, sourceUrlArray, backgrounds, dishTypesArray, dietsArray, analyzedInstructionsArray] = useCardContents()
    const { changeShow } = cardClick

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
            setCardClick({
                ...cardClick,
                changeShow: !changeShow
            })
        }
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
                    <h3>{titleCardArray[i]}</h3>
                    <div className="diets-stars">
                        {vegetarianArray[i] && <img src={vegetarianImg} alt="vegetarian" />}
                        {veganArray[i] && <img src={veganImg} alt="vegan" />}
                        {glutenFreeArray[i] && <img src={glutenFreeImg} alt="glutenFree" />}
                        {dairyFreeArray[i] && <img src={dairyFreeImg} alt="dairyFree" />}
                        {(gapsArray[i] === 'yes') && <img src={gapsImg} alt="gaps" />}
                        {lowFodmapArray[i] && <img src={lowFodmapImg} alt="lowFodmap" />}
                    </div>
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
                    {(veryHealthyArray[i]) && <img className="very-healthy" src={veryHealthyImg} alt="veryHealthy" />}
                </div>
                <img ref={closeRef} className="close" src={close} alt="X" />
                <img className="divider-line" src={dividerLineImg} alt="DividerLine" />
            </div>
            <div
                className={`shadow-card ${(counter === (i + 1)) ? "transition-shadowcardc" : "transition-shadowcards box-shadow4"}`}
                style={{
                    zIndex: `${(changeShow && (counter === (i + 1))) ? 1 : 2}`
                }}
            >
            </div>
        </div>
    )
}