import React, { useState } from 'react'
import { AppContext } from './components/AppContext'
import { Wrapper } from './components/Wrapper'

export const Recipes = () => {

    const [formState, setFormState] = useState({
        showMore: true,
        loading: false,
        howManyCards: 0,
        data: []
    })

    return (
        <AppContext.Provider value={{
            formState,
            setFormState
        }}>
            <Wrapper />
        </AppContext.Provider>
    )
}
