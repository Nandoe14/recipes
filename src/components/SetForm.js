import React, { useContext } from 'react'
import { useForm } from '../hooks/useForm'
import { FormInputsFields } from './FormInputsFields'
import loadingImg from './../assets/loading.gif'
import { getRecipeFetch } from '../helpers/getRecipeFetch'
import { AppContext } from './AppContext'

export const SetForm = () => {

    const { formState, setFormState } = useContext(AppContext)

    const { showMore, loading, data } = formState

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
        console.log(e.target[1].value, typeof e.target[1].value)
        setFormState({
            ...formState,
            loading: true
        })
        setTimeout(() => {// This is for a static value configurable at getRecipeFetch.js
            getRecipeFetch(e.target)
                .then(info => setFormState({
                    ...formState,
                    loading: false,
                    data: info
                }))
            reset()
        }, 2000);
    }

    console.log(data)

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
            {
                (loading)
                &&
                (
                    <div className="loading">
                        <img src={loadingImg} alt="loading..." />
                    </div>
                )
            }
        </form>
    )
}
