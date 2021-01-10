import { useContext } from "react"
import { AppContext } from "../components/AppContext"

export const useCardContents = () => {
    const { formState } = useContext(AppContext)
    const { data } = formState

    const vegetarianArray = data.map(({ vegetarian }) => {
        return vegetarian
    })

    const veganArray = data.map(({ vegan }) => {
        return vegan
    })

    const glutenFreeArray = data.map(({ glutenFree }) => {
        return glutenFree
    })

    const dairyFreeArray = data.map(({ dairyFree }) => {
        return dairyFree
    })

    const gapsArray = data.map(({ gaps }) => {
        return gaps
    })

    const lowFodmapArray = data.map(({ lowFodmap }) => {
        return lowFodmap
    })

    const veryHealthyArray = data.map(({ veryHealthy }) => {
        return veryHealthy
    })

    const titleCardArray = data.map(({ title }) => {
        return title
    })

    const readyInMinutesArray = data.map(({ readyInMinutes }) => {
        return readyInMinutes
    })

    const servingsArray = data.map(({ servings }) => {
        return servings
    })

    const sourceUrlArray = data.map(({ sourceUrl }) => {
        return sourceUrl
    })

    const backgrounds = data.map(({ image }) => {
        return image
    })

    const dishTypesArray = data.map(({ dishTypes }) => {
        return (dishTypes.join(", "))
    })

    const dietsArray = data.map(({ diets }) => {
        return (diets.join(", "))
    })

    const analyzedInstructionsArray = data.map(({ analyzedInstructions }) => {
        return analyzedInstructions[0]?.steps.map(step => {
            return step.ingredients?.map(ingredient => {
                return ingredient.name
            })
        })
    })

    return [vegetarianArray, veganArray, glutenFreeArray, dairyFreeArray, veryHealthyArray, gapsArray, lowFodmapArray, titleCardArray, readyInMinutesArray, servingsArray, sourceUrlArray, backgrounds, dishTypesArray, dietsArray, analyzedInstructionsArray]
}
