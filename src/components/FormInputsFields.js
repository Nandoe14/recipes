import React from 'react'

export const FormInputsFields = ({
    i,
    showMore,
    labelsArray,
    namesArray,
    valuesArray,
    handleInputChange,
}) => {

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
            >{labelsArray[i]}</label>
            <input
                id={`input-${namesArray[i]}`}
                className="input-food"
                type="text"
                name={namesArray[i]}
                value={valuesArray[i]}
                maxLength="250"
                autoComplete="off"
                required={(i === 0 || i === 12)}
                onChange={handleInputChange}
            />
        </div>
    )
}
