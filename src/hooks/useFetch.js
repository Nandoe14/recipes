
export const useFetch = async (text) => {

    // const resp = await fetch(`https://twinword-sentiment-analysis.p.rapidapi.com/analyze/?text=${encodeURI(text)}`, {
    //     "method": "GET",
    //     "headers": {
    //         "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`,
    //         "x-rapidapi-host": "twinword-sentiment-analysis.p.rapidapi.com"
    //     }
    // })

    // const dataIn = await resp.json()

    //     .catch(err => {
    //         console.error(err);
    //     })

    // const data = dataIn.map(info => {
    //     return {
    //         id: img.id,
    //         title: img.title,
    //         url: img.images?.downsized_medium.url
    //     }
    // })

    /////////////////////////////
    ////////// Exmaple //////////
    /////////////////////////////

    ///// --> Get example response. Remember to use a setTimeout function on this <-- /////

    const dataIn = {
        title: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
        image: "https://spoonacular.com/recipeImages/716429-556x370.jpg",
        servings: 2,
        readyInMinutes: 45,
        sourceUrl: "http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html",
        creditsText: "Full Belly Sisters",
        cuisines: [],
        dairyFree: false,
        diets: [],
        gaps: "no",
        glutenFree: false,
        instructions: "",
        ketogenic: false,
        lowFodmap: false,
        vegan: false,
        vegetarian: false,
        whole30: false,
        extendedIngredients: [
            {
                image: "butter-sliced.jpg",
                measures: {
                    metric: {
                        amount: 1.0,
                        unitLong: "Tbsp",
                        unitShort: "Tbsp"
                    },
                    us: {
                        amount: 1.0,
                        unitLong: "Tbsp",
                        unitShort: "Tbsp"
                    }
                },
                name: "butter",
                original: "1 tbsp butter"
            },
            {
                image: "cauliflower.jpg",
                measures: {
                    metric: {
                        amount: 473.176,
                        unitLong: "milliliters",
                        unitShort: "ml"
                    },
                    us: {
                        amount: 2.0,
                        unitLong: "cups",
                        unitShort: "cups"
                    }
                },
                name: "cauliflower florets",
                original: "about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces"
            }
        ]
    }

    const data = dataIn.map(({ title, image, servings, readyInMinutes, sourceUrl, creditsText, cuisines, dairyFree, diets, gaps, glutenFree, instructions, ketogenic, lowFodmap, vegan, vegetarian, whole30, extendedIngredients }) => {
        return {
            title,
            image,
            servings,
            readyInMinutes,
            sourceUrl,
            creditsText,
            cuisines,
            dairyFree,
            diets,
            gaps,
            glutenFree,
            instructions,
            ketogenic,
            lowFodmap,
            vegan,
            vegetarian,
            whole30,
            extendedIngredients
        }
    })

    return data;
}
