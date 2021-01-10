import React, { useContext } from 'react'
import { useForm } from '../hooks/useForm'
import { FormInputsFields } from './FormInputsFields'
import { getRecipeFetch } from '../helpers/getRecipeFetch'
import { AppContext } from './AppContext'

export const SetForm = ({ containerRef, potCoverContRef, potCoverRef }) => {

    const { formState, setFormState } = useContext(AppContext)
    const { showMore } = formState

    const [inputValues, handleInputChange, reset] = useForm({
        query: '',
        intolerances: '',
        type: '',
        includeIngredients: '',
        cuisine: '',
        excludeIngredients: '',
        diet: '',
        maxReadyTime: '',
        maxCalories: '',
        minCalories: '',
        maxSugar: '',
        minSugar: '',
        quantity: ''
    })

    const { query, type, cuisine, diet, intolerances, includeIngredients, excludeIngredients, maxReadyTime, maxCalories, minCalories, maxSugar, minSugar, quantity } = inputValues

    const labelsArray = ['Food*:', 'Intolerances :', 'Type :', 'Include Ingredients :', 'Cuisine :', 'Exclude Ingredients :', 'Diet :', 'Max Ready Time :', 'Max Calories :', 'Min Calories :', 'Max Sugar :', 'Min Sugar :', 'Quantity*:']
    const namesArray = ['query', 'intolerances', 'type', 'includeIngredients', 'cuisine', 'excludeIngredients', 'diet', 'maxReadyTime', 'maxCalories', 'minCalories', 'maxSugar', 'minSugar', 'quantity']
    const valuesArray = [query, intolerances, type, includeIngredients, cuisine, excludeIngredients, diet, maxReadyTime, maxCalories, minCalories, maxSugar, minSugar, quantity]

    const howManyLabelInput = 13

    const cantLI = Array.apply(null, Array(howManyLabelInput)).map((x, i) => i) // [0,1,2,3...,n]

    const handleButtonClick = (e) => {// When clicking on the form button
        e.stopPropagation()
    }

    const handleShowClick = (e) => {// When clicking show more/less on form
        e.stopPropagation()
        setFormState({
            ...formState,
            showMore: !showMore
        })
    }

    const handleSubmit = (e) => {// When submitting the form to set Card's Content
        e.preventDefault()
        setFormState({
            ...formState,
            loading: true
        })
        setTimeout(() => {// This is for a static value configurable at getRecipeFetch.js
            getRecipeFetch(e.target)
                .then(info => setFormState({
                    ...formState,
                    loading: false,
                    howManyCards: parseFloat(e.target[12].value),
                    data: info
                }))
                .then(
                    setTimeout(() => {
                        potCoverRef.current.classList.toggle("remove-pot-top")
                        potCoverContRef.current.classList.toggle("remove-pt-cont")
                        reset()
                    }, 500)
                )
        }, 2000);
        containerRef.current.classList.toggle("animate-container-results")
        containerRef.current.classList.remove("animate-container-goback")
    }

    return (
        <form onSubmit={handleSubmit} style={{ height: `${(showMore) ? 264 : 385}px` }}>
            {
                cantLI.map((unit) =>
                    <FormInputsFields
                        key={unit}
                        i={unit}
                        showMore={showMore}
                        labelsArray={labelsArray}
                        namesArray={namesArray}
                        valuesArray={valuesArray}
                        handleInputChange={handleInputChange}
                    />
                )
            }
            <button onClick={handleButtonClick}>Go!</button>
            <div className="shower-cont">
                {
                    (showMore)
                        ?
                        <span className="show-span" onClick={handleShowClick}>Show more...</span>
                        :
                        <span className="show-span" onClick={handleShowClick}>Show less</span>
                }
            </div>
        </form>
    )
}
