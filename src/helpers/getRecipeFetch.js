
export const getRecipeFetch = async (Arr = []) => {

    const query = `${(Arr[0].value === '') ? '' : `&query=${Arr[0].value}`}`,
        intolerances = `${(Arr[1].value === '') ? '' : `&intolerances=${Arr[1].value}`}`,
        type = `${(Arr[2].value === '') ? '' : `&type=${Arr[2].value}`}`,
        includeIngredients = `${(Arr[3].value === '') ? '' : `&includeIngredients=${Arr[3].value}`}`,
        cuisine = `${(Arr[4].value === '') ? '' : `&cuisine=${Arr[4].value}`}`,
        excludeIngredients = `${(Arr[5].value === '') ? '' : `&excludeIngredients=${Arr[5].value}`}`,
        diet = `${(Arr[6].value === '') ? '' : `&diet=${Arr[6].value}`}`,
        maxReadyTime = `${(Arr[7].value === '') ? '' : `&maxReadyTime=${Arr[7].value}`}`,
        maxCalories = `${(Arr[8].value === '') ? '' : `&maxCalories=${Arr[8].value}`}`,
        minCalories = `${(Arr[9].value === '') ? '' : `&minCalories=${Arr[9].value}`}`,
        maxSugar = `${(Arr[10].value === '') ? '' : `&maxSugar=${Arr[10].value}`}`,
        minSugar = `${(Arr[11].value === '') ? '' : `&minSugar=${Arr[11].value}`}`,
        quantity = `${(Arr[12].value === '') ? '' : `&number=${(parseFloat(Arr[12].value) > 8) ? 8 : Arr[12].value}`}`// Max 8 Cards

    const rlink = encodeURI(query + intolerances + type + includeIngredients + cuisine + excludeIngredients + diet + maxReadyTime + maxCalories + minCalories + maxSugar + minSugar + quantity)

    const link = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&addRecipeInformation=true${rlink}`

    // const dataIn = fetch(link)
    //     .then((resp) => {
    //         for (let pair of resp.headers.entries()) { // accessing the entries
    //             // if (pair[0] === 'X-API-Quota-Used') { // key I'm looking for in this instance
    //             //     console.log(pair[0] + ': ' + pair[1])
    //             // }
    //             console.log("pair: ", pair)
    //         }
    //         return resp.json()
    //     })

    //     // const totalPoints = resp.headers.get('X-API-Quota-Used')

    //     .catch(console.error)

    const resp = await fetch(link)

    // for (let pair of resp.headers.entries()) { // accessing the entries
    //     console.log("pair: ", pair)
    // }

    const dataIn = await resp.json()

        .catch(console.error)

    const { results, totalResults, code, message } = await dataIn

    const data = results?.map(({ vegetarian, vegan, glutenFree, dairyFree, veryHealthy, gaps, lowFodmap, title, readyInMinutes, servings, sourceUrl, image, dishTypes, diets, analyzedInstructions }) => {
        return {
            vegetarian,
            vegan,
            glutenFree,
            dairyFree,
            veryHealthy,
            gaps,
            lowFodmap,
            title,
            readyInMinutes,
            servings,
            sourceUrl,
            image,
            dishTypes,
            diets,
            analyzedInstructions
        }
    })

    return { results, data, totalResults, code, message };
}
