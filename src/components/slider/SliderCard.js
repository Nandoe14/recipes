import React, { useRef } from 'react'
import close from './../../assets/close3.png'
import card1 from './../../assets/card1.jpg'
import card2 from './../../assets/card2.jpg'
import card3 from './../../assets/card3.jpg'
import card4 from './../../assets/card4.jpg'
import card5 from './../../assets/card5.jpg'
import card6 from './../../assets/card6.jpg'
import card7 from './../../assets/card7.jpg'
import card8 from './../../assets/card8.jpg'
import vegetarianImg from './../../assets/vegetarian.png'
import veganImg from './../../assets/vegan.png'
import glutenFreeImg from './../../assets/glutenFree.png'
import dairyFreeImg from './../../assets/dairyFree.png'
import veryHealthyImg from './../../assets/veryHealthy.png'
import gapsImg from './../../assets/gaps.png'
import lowFodmapImg from './../../assets/lowFodmap.png'
import readyMinutsImg from './../../assets/readyMinuts.png'
import dividerLineImg from './../../assets/dividerLine.png'

export const SliderCard = ({ i, counter, cardClick, setCardClick, gap, howManyCards, titleCardArray, paragraphArray, footerCardArray }) => {

    const cardRef = useRef(null)// Catching the div with className "card-slider"
    const closeRef = useRef(null)// Catching the img with className "close"

    const { changeShow } = cardClick

    const backgrounds = [card1, card2, card3, card4, card5, card6, card7, card8]

    const tTime = 0.4 // Lapse of time for transitions

    const handleCardClick = () => {// When clicking on a selected card. This function modifies the card's DOM, setting the "transform" property in function of the setted Gap
        if (counter === (i + 1)) {
            cardRef.current.style.boxShadow = `${changeShow ? '10px 10px 18px 10px rgba(0,0,0,0.8), inset 0px 0px 20px 1px rgba(0,0,0,0.2)' : '5px 5px 15px rgba(0,0,0,0.2)'}`
            cardRef.current.style.transition = `${!changeShow ? `transform ${tTime}s cubic-bezier(0.02, 0.39, 0.6, 0.76), box-shadow ${tTime}s ease` : `transform ${tTime}s cubic-bezier(0.02, 0.39, 0.6, 0.76), z-index 0s linear ${tTime}s, box-shadow ${tTime * 0.75}s ease ${tTime * 0.25}s`}`
            cardRef.current.style.transform = `${!changeShow ? `scale(1.5) translate(${(172 + ((-296 - parseFloat(gap) - 21.1) / (4 / 3) * i))}px, 0px)` : `translate(${(454 - (24 * i)) - ((-296 - parseFloat(gap)) - ((-296 - parseFloat(gap)) * i))}px , 0)`}`
            cardRef.current.style.zIndex = `${!changeShow ? 500 : (100 - i)}`
            cardRef.current.style.cursor = `${!changeShow ? 'default' : 'pointer'}`
            closeRef.current.classList.toggle("show")
            setCardClick({
                ...cardClick,
                changeShow: !changeShow
            })
        }
    }

    return (// The card's DOM is setted in function of card number (i), setted Gap and total number of cards. Ok I have to confess that I had to develop the functions on a sheet of paper
        <div
            ref={cardRef}
            className="card-slider"
            style={{
                boxShadow: `${(counter === (i + 1)) ? '10px 10px 18px 10px rgba(0,0,0,0.8), inset 0px 0px 20px 1px rgba(0,0,0,0.2)' : '5px 5px 15px rgba(0,0,0,0.9)'}`,
                zIndex: `${100 - i}`,
                transform: `${(counter === (i + 1)) ? `translate(${(454 - (24 * i)) - ((-296 - parseFloat(gap)) - ((-296 - parseFloat(gap)) * i))}px , 0)` : `scale(${1 - (i * 0.007)}) rotateX(4deg) rotateY(60deg) translate(0, ${-(6 * i)}px)`}`,
                marginLeft: `${(i === 0) ? -(((8 * 67) - 24) - (((howManyCards - 2) * (((67 * (parseFloat(gap) + 320)) / 70) + (201 / 70))))) : gap}px`
            }}
            onClick={handleCardClick}
        >
            <div className="cs-wrapper">
                <div className="title-recipe" style={{ backgroundImage: `url(${backgrounds[i]})` }}>
                    <h3>{titleCardArray[i]}</h3>
                    <div className="diets-stars">
                        <img src={vegetarianImg} alt="vegetarian" />
                        <img src={veganImg} alt="vegan" />
                        <img src={glutenFreeImg} alt="glutenFree" />
                        <img src={dairyFreeImg} alt="dairyFree" />
                        <img src={gapsImg} alt="gaps" />
                        <img src={lowFodmapImg} alt="lowFodmap" />
                    </div>
                </div>
                <div className="para-cont">
                    <div className="line-info-recipe">
                        <img src={readyMinutsImg} alt="readyMinuts" />
                        <span className="info-recipe-e">4 Servings</span>
                    </div>
                    <div className="line-info-recipe">
                        <img src={readyMinutsImg} alt="readyMinuts" />
                        <span className="info-recipe-e">Ready in 45 minutes</span>
                    </div>
                    <div className="line-info-recipe">
                        <img src={readyMinutsImg} alt="readyMinuts" />
                        <span className="info-recipe-e">For lunch, main course, main dish, dinner</span>
                    </div>
                    <div className="line-info-recipe">
                        <img src={readyMinutsImg} alt="readyMinuts" />
                        <span className="info-recipe-e">Pescatarian Diet</span>
                    </div>
                    <div className="line-info-recipe">
                        <img src={readyMinutsImg} alt="readyMinuts" />
                        <span className="">Some ingredients: Pasta, water, olive oil, onion, all purpose flour, milk, hot sauce, green onions, parsley, cheese, peas, tuna</span>
                    </div>
                    <span className="full-recipe">Full Recipe...</span>
                    <img className="very-healthy" src={veryHealthyImg} alt="veryHealthy" />
                    {/* <span className="source-name">{footerCardArray[i]}</span> */}
                </div>
                <img ref={closeRef} className="close" src={close} alt="X" />
                <img className="divider-line" src={dividerLineImg} alt="DividerLine" />
            </div>
            <div
                className="shadow-card"
                style={{
                    boxShadow: `${(counter === (i + 1)) ? 'none' : 'inset 20px 0px 29px 20px rgba(0,0,0,0.7)'}`,
                    transition: `${(counter === (i + 1)) ? `box-shadow ${tTime}s ease` : `box-shadow ${tTime * 0.75}s ease ${tTime * 0.25}s`}`
                }}
            >
            </div>
        </div>
    )
}