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

export const SliderCard = ({ i, counter, cardClick, setCardClick, gap, howManyCards, titleCardArray, paragraphArray, footerCardArray }) => {

    const cardRef = useRef(null)// Catching the div with className "card-slider"
    const closeRef = useRef(null)// Catching the img with className "close"

    const { changeShow } = cardClick

    const backgrounds = [card1, card2, card3, card4, card5, card6, card7, card8]

    const handleCardClick = () => {// When clicking on a selected card. This function modifies the card's DOM, setting the "transform" property in function of the setted Gap
        if (counter === (i + 1)) {
            cardRef.current.style.transition = `${!changeShow ? 'transform 0.5s cubic-bezier(0.02, 0.39, 0.6, 0.76)' : 'transform 0.5s cubic-bezier(0.02, 0.39, 0.6, 0.76), z-index 0s linear 0.5s, box-shadow 0.5s ease 0.2s'}`
            cardRef.current.style.transform = `${!changeShow ? `scale(1.5) translate(${(172 + ((-296 - parseFloat(gap) - 21.1) / (4 / 3) * i))}px, 0px)` : `translate(${(454 - (24 * i)) - ((-296 - parseFloat(gap)) - ((-296 - parseFloat(gap)) * i))}px , 0)`}`
            cardRef.current.style.zIndex = `${!changeShow ? 500 : (100 - i)}`
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
                backgroundImage: `url(${backgrounds[i]})`,
                boxShadow: `${(counter === (i + 1)) ? '10px 10px 18px 10px rgba(0,0,0,0.8), inset 0px 0px 20px 1px rgba(0,0,0,0.2)' : '5px 5px 15px rgba(0,0,0,0.9)'}`,
                zIndex: `${100 - i}`,
                transform: `${(counter === (i + 1)) ? `translate(${(454 - (24 * i)) - ((-296 - parseFloat(gap)) - ((-296 - parseFloat(gap)) * i))}px , 0)` : `scale(${1 - (i * 0.007)}) rotateX(4deg) rotateY(60deg) translate(0, ${-(6 * i)}px)`}`,
                marginLeft: `${(i === 0) ? -(((8 * 67) - 24) - (((howManyCards - 2) * (((67 * (parseFloat(gap) + 320)) / 70) + (201 / 70))))) : gap}px`
            }}
            onClick={handleCardClick}
        >
            <h3>{titleCardArray[i]}</h3>
            <div className="para-cont">
                <p>{paragraphArray[i]}</p>
            </div>
            <span>{footerCardArray[i]}</span>
            <img ref={closeRef} className="close" src={close} alt="X" />
            <div
                className="shadow-card"
                style={{
                    boxShadow: `${(counter === (i + 1)) ? 'none' : 'inset 20px -20px 29px 20px rgba(0,0,0,0.7)'}`,
                }}
            ></div>
        </div>
    )
}