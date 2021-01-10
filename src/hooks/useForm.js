import { useState } from 'react'

export const useForm = (initialState = {}) => {

    const [values, setvalues] = useState(initialState)

    const reset = () => {// Set the values to the initialState
        setvalues(initialState)
    }

    const handleInputChange = ({ target }) => {
        setvalues({
            ...values,
            [target.name]: target.value
        })
    }

    return [values, handleInputChange, reset]
}
