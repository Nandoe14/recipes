import React, { useContext } from 'react'
import { AppContext } from './AppContext'

export const FormInputsFields = ({
    i,
    showMore,
    labelsArray,
    namesArray,
    valuesArray,
    handleInputChange,
}) => {

    const { formState, setFormState, } = useContext(AppContext)

    const handleMouseEnterLabel = (i) => {
        setFormState({
            ...formState,
            labelFormNum: i,
            showLD: true
        })
    }

    const handleMouseLeaveLabel = (i) => {
        setFormState({
            ...formState,
            labelFormNum: i,
            showLD: false
        })
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
            <label
                htmlFor={`input-${namesArray[i]}`}
                title={(i === 0 || i === 12) ? 'Required' : undefined}
                onMouseEnter={() => handleMouseEnterLabel(i)}
                onMouseLeave={() => handleMouseLeaveLabel(i)}
            >{labelsArray[i]}</label>
            <input
                id={`input-${namesArray[i]}`}
                className="input-food"
                type={`${(i < 7) ? "text" : "number"}`}
                name={namesArray[i]}
                value={valuesArray[i]}
                max={`${(i === 12) ? 8 : undefined}`}
                min={`${(i === 12) ? 1 : undefined}`}
                maxLength="250"
                autoComplete="off"
                required={(i === 0 || i === 12)}
                onChange={handleInputChange}
            />
        </div>
    )
}
