import React, { useState } from 'react'
import { AppContext } from './components/AppContext'
import { Wrapper } from './components/Wrapper'
import { useCounter } from './hooks/useCounter'

export const Recipes = () => {

    const [formState, setFormState] = useState({
        showMore: true,
        loading: false,
        howManyCards: 8,
        changeShow: false,
        showSparkles: true,
        labelFormNum: 0,
        showLD: false,
        showErrorApi: false,
        errorApiNum: 0,
        data: []
    })

    const { howManyCards } = formState

    const cantCards = Array.apply(null, Array(howManyCards)).map((x, i) => i) // [0,1,2,3...,n]

    const n = cantCards.length

    const { counter, increment, decrement, resetCounter, resetn } = useCounter({
        init: 0,
        n
    })

    return (
        <AppContext.Provider value={{
            formState,
            setFormState,
            cantCards,
            counter,
            increment,
            decrement,
            resetCounter,
            resetn,
            n
        }}>
            <Wrapper />
        </AppContext.Provider>
    )
}
