import React, { useState } from 'react'
import { FormInputsFields } from './FormInputsFields'

export const SetForm = () => {

    const [showMore, setShowMore] = useState(true)

    const howManyLabelInput = 13

    const cantLI = Array.apply(null, Array(howManyLabelInput)).map((x, i) => i) // [0,1,2,3...,n]

    const handleButtonClick = (e) => {// When clicking on the form button
        e.stopPropagation()
    }

    const handleShowClick = (e) => {// When clicking on the form button
        e.stopPropagation()
        setShowMore(!showMore)
    }

    const handleSubmit = (e) => {// When submitting the form to set Card's Content
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit} style={{ height: `${(showMore) ? 264 : 385}px` }}>
            {
                cantLI.map((unit) =>
                    <FormInputsFields
                        key={unit}
                        i={unit}
                        showMore={showMore}
                    />
                )
            }
            <button onClick={handleButtonClick}>Go!</button>
            {
                (showMore)
                    ?
                    <span className="show-span" onClick={handleShowClick}>Show more...</span>
                    :
                    <span className="show-span" onClick={handleShowClick}>Show less</span>
            }
        </form>
    )
}
