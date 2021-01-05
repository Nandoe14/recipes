import React from 'react'
import { useForm } from '../hooks/useForm'

export const FormInputsFields = ({ i, showMore }) => {

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

    const handleInputClick = (e) => {// When clicking on a specific input
        e.stopPropagation()
    }

    return (
        <div
            id={`field-${namesArray[i]}`}
            className="input-field"
            style={{
                width: `${(i % 2 === 0) ? 38 : 62}%`,
                order: `${(showMore && (i === 12)) ? 8 : (i + 1)}`,
                visibility: `${(showMore && (i >= 8) && (i !== 12)) ? 'hidden' : 'unset'}`
            }}
        >
            <label htmlFor={`input-${namesArray[i]}`} title={(i === 0 || i === 12) && 'Required'}>{labelsArray[i]}</label>
            <input
                id={`input-${namesArray[i]}`}
                className="input-food"
                type="text"
                name={namesArray[i]}
                value={valuesArray[i]}
                minLength="1"
                maxLength="35"
                autoComplete="off"
                required={(i === 0 || i === 12)}
                onChange={handleInputChange}
                onClick={handleInputClick}
            />
        </div>
    )
}
