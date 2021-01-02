
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
        results: [
            {
                vegetarian: false,
                vegan: false,
                glutenFree: false,
                dairyFree: false,
                veryHealthy: true,
                gaps: 'no',
                lowFodmap: false,
                sourceName: 'Foodista',
                title: 'Pasta With Tuna',
                readyInMinutes: 45,
                servings: 4,
                sourceUrl: 'http://www.foodista.com/recipe/K6QWSKQM/pasta-with-tuna',
                image: 'https://spoonacular.com/recipeImages/654959-312x231.jpg',
                cuisines: [],
                dishTypes: [
                    'lunch',
                    'main course',
                    'main dish',
                    'dinner'
                ],
                diets: [
                    'pescatarian'
                ],
                analyzedInstructions: [
                    {
                        steps: [
                            {
                                number: 1,
                                step: 'Cook pasta in a large pot of boiling water until al dente.',
                                ingredients: [
                                    {
                                        id: 20420,
                                        name: 'pasta',
                                        localizedName: 'pasta',
                                        image: 'fusilli.jpg'
                                    },
                                    {
                                        id: 14412,
                                        name: 'water',
                                        localizedName: 'water',
                                        image: 'water.png'
                                    }
                                ],
                                equipment: [
                                    {
                                        id: 404752,
                                        name: 'pot',
                                        localizedName: 'pot',
                                        image: 'stock-pot.jpg'
                                    }
                                ]
                            },
                            {
                                number: 2,
                                step: 'Drain and return to warm pot. Put olive oil in saucepan and add onion.',
                                ingredients: [
                                    {
                                        id: 4053,
                                        name: 'olive oil',
                                        localizedName: 'olive oil',
                                        image: 'olive-oil.jpg'
                                    },
                                    {
                                        id: 11282,
                                        name: 'onion',
                                        localizedName: 'onion',
                                        image: 'brown-onion.png'
                                    }
                                ],
                                equipment: [
                                    {
                                        id: 404669,
                                        name: 'sauce pan',
                                        localizedName: 'sauce pan',
                                        image: 'sauce-pan.jpg'
                                    },
                                    {
                                        id: 404752,
                                        name: 'pot',
                                        localizedName: 'pot',
                                        image: 'stock-pot.jpg'
                                    }
                                ]
                            },
                            {
                                number: 3,
                                step: 'Saute until transparent. Stir in flour and cook for a few seconds and then whisk in milk. Stir constantly until this thickens.',
                                ingredients: [
                                    {
                                        id: 20081,
                                        name: 'all purpose flour',
                                        localizedName: 'all purpose flour',
                                        image: 'flour.png'
                                    },
                                    {
                                        id: 1077,
                                        name: 'milk',
                                        localizedName: 'milk',
                                        image: 'milk.png'
                                    }
                                ],
                                equipment: [
                                    {
                                        id: 404661,
                                        name: 'whisk',
                                        localizedName: 'whisk',
                                        image: 'whisk.png'
                                    }
                                ]
                            },
                            {
                                number: 4,
                                step: 'Add peas, tuna (shredded into chunks,) parsley, green onions, cheese and hot pepper sauce.',
                                ingredients: [
                                    {
                                        id: 6168,
                                        name: 'hot sauce',
                                        localizedName: 'hot sauce',
                                        image: 'hot-sauce-or-tabasco.png'
                                    },
                                    {
                                        id: 11291,
                                        name: 'green onions',
                                        localizedName: 'green onions',
                                        image: 'spring-onions.jpg'
                                    },
                                    {
                                        id: 11297,
                                        name: 'parsley',
                                        localizedName: 'parsley',
                                        image: 'parsley.jpg'
                                    },
                                    {
                                        id: 1041009,
                                        name: 'cheese',
                                        localizedName: 'cheese',
                                        image: 'cheddar-cheese.png'
                                    },
                                    {
                                        id: 11304,
                                        name: 'peas',
                                        localizedName: 'peas',
                                        image: 'peas.jpg'
                                    },
                                    {
                                        id: 10015121,
                                        name: 'tuna',
                                        localizedName: 'tuna',
                                        image: 'canned-tuna.png'
                                    }
                                ],
                                equipment: []
                            },
                            {
                                number: 5,
                                step: 'Pour over pasta and stir gently to mix.',
                                ingredients: [
                                    {
                                        id: 20420,
                                        name: 'pasta',
                                        localizedName: 'pasta',
                                        image: 'fusilli.jpg'
                                    }
                                ],
                                equipment: []
                            },
                            {
                                number: 6,
                                step: 'Serve at once.',
                                ingredients: [],
                                equipment: []
                            }
                        ]
                    }
                ],
                spoonacularSourceUrl: 'https://spoonacular.com/pasta-with-tuna-654959',
                nutrition: {
                    nutrients: [
                        {
                            title: 'Fat',
                            amount: 10.3277,
                            unit: 'g'
                        }
                    ]
                }
            },
            {
                vegetarian: false,
                vegan: false,
                glutenFree: false,
                dairyFree: true,
                veryHealthy: false,
                cheap: false,
                veryPopular: false,
                sustainable: false,
                weightWatcherSmartPoints: 12,
                gaps: 'no',
                lowFodmap: false,
                aggregateLikes: 1,
                spoonacularScore: 68,
                healthScore: 28,
                creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
                license: 'CC BY 3.0',
                sourceName: 'Foodista',
                pricePerServing: 616.45,
                id: 654812,
                title: 'Pasta and Seafood',
                readyInMinutes: 45,
                servings: 2,
                sourceUrl: 'http://www.foodista.com/recipe/8YWWDKPS/pasta-and-seafood',
                image: 'https://spoonacular.com/recipeImages/654812-312x231.jpg',
                imageType: 'jpg',
                summary: 'Pastan and Seafood is a <b>dairy free and pescatarian</b> main course. One serving contains <b>521 calories</b>, <b>38g of protein</b>, and <b>4g of fat</b>. This recipe serves 2 and costs $5.79 per serving. From preparation to the plate, this recipe takes around <b>45 minutes</b>. This recipe from Foodista has 1 fans. If you have shrimp, squid ink linguine, parsley, and a few other ingredients on hand, you can make it. To use up the salt you could follow this main course with the <a href="https://spoonacular.com/recipes/apple-turnovers-recipe-48175">Apple Turnovers Recipe</a> as a dessert. All things considered, we decided this recipe <b>deserves a spoonacular score of 57%</b>. This score is solid. Try <a href="https://spoonacular.com/recipes/seafood-pasta-373851">Seafood Pasta</a>, <a href="https://spoonacular.com/recipes/seafood-pasta-246928">Seafood Pasta</a>, and <a href="https://spoonacular.com/recipes/seafood-pasta-22624">Seafood Pasta</a> for similar recipes.',
                cuisines: [],
                dishTypes: [
                    'lunch',
                    'main course',
                    'main dish',
                    'dinner'
                ],
                diets: [
                    'dairy free',
                    'pescatarian'
                ],
                occasions: [],
                analyzedInstructions: [
                    {
                        name: '',
                        steps: [
                            {
                                number: 1,
                                step: 'Bring water to a boil for pasta. Cook for 10 minutes or until al dente. In one saucepan heat half of the olive oil.',
                                ingredients: [
                                    {
                                        id: 4053,
                                        name: 'olive oil',
                                        localizedName: 'olive oil',
                                        image: 'olive-oil.jpg'
                                    },
                                    {
                                        id: 20420,
                                        name: 'pasta',
                                        localizedName: 'pasta',
                                        image: 'fusilli.jpg'
                                    },
                                    {
                                        id: 14412,
                                        name: 'water',
                                        localizedName: 'water',
                                        image: 'water.png'
                                    }
                                ],
                                equipment: [
                                    {
                                        id: 404669,
                                        name: 'sauce pan',
                                        localizedName: 'sauce pan',
                                        image: 'sauce-pan.jpg'
                                    }
                                ],
                                length: {
                                    number: 10,
                                    unit: 'minutes'
                                }
                            },
                            {
                                number: 2,
                                step: 'Add garlic and saute for a few seconds.',
                                ingredients: [
                                    {
                                        id: 11215,
                                        name: 'garlic',
                                        localizedName: 'garlic',
                                        image: 'garlic.png'
                                    }
                                ],
                                equipment: []
                            },
                            {
                                number: 3,
                                step: 'Add tomatoes and cook for 5 minutes or until thickened; season with salt and pepper.In another skillet cook the shrimp in half the remaining olive oil.',
                                ingredients: [
                                    {
                                        id: 1102047,
                                        name: 'salt and pepper',
                                        localizedName: 'salt and pepper',
                                        image: 'salt-and-pepper.jpg'
                                    },
                                    {
                                        id: 4053,
                                        name: 'olive oil',
                                        localizedName: 'olive oil',
                                        image: 'olive-oil.jpg'
                                    },
                                    {
                                        id: 11529,
                                        name: 'tomato',
                                        localizedName: 'tomato',
                                        image: 'tomato.png'
                                    },
                                    {
                                        id: 15152,
                                        name: 'shrimp',
                                        localizedName: 'shrimp',
                                        image: 'shrimp.png'
                                    }
                                ],
                                equipment: [
                                    {
                                        id: 404645,
                                        name: 'frying pan',
                                        localizedName: 'frying pan',
                                        image: 'pan.png'
                                    }
                                ],
                                length: {
                                    number: 5,
                                    unit: 'minutes'
                                }
                            },
                            {
                                number: 4,
                                step: 'Remove from heat and toss in the parsley; season with salt and pepper.',
                                ingredients: [
                                    {
                                        id: 1102047,
                                        name: 'salt and pepper',
                                        localizedName: 'salt and pepper',
                                        image: 'salt-and-pepper.jpg'
                                    },
                                    {
                                        id: 11297,
                                        name: 'parsley',
                                        localizedName: 'parsley',
                                        image: 'parsley.jpg'
                                    }
                                ],
                                equipment: []
                            },
                            {
                                number: 5,
                                step: 'Drain pasta and transfer to a serving bowl; add shrimp and tomato mixtures and toss; do not serve with cheese.This recipe yields 2 servings.',
                                ingredients: [
                                    {
                                        id: 1041009,
                                        name: 'cheese',
                                        localizedName: 'cheese',
                                        image: 'cheddar-cheese.png'
                                    },
                                    {
                                        id: 15152,
                                        name: 'shrimp',
                                        localizedName: 'shrimp',
                                        image: 'shrimp.png'
                                    },
                                    {
                                        id: 11529,
                                        name: 'tomato',
                                        localizedName: 'tomato',
                                        image: 'tomato.png'
                                    },
                                    {
                                        id: 20420,
                                        name: 'pasta',
                                        localizedName: 'pasta',
                                        image: 'fusilli.jpg'
                                    }
                                ],
                                equipment: [
                                    {
                                        id: 404783,
                                        name: 'bowl',
                                        localizedName: 'bowl',
                                        image: 'bowl.jpg'
                                    }
                                ]
                            }
                        ]
                    }
                ],
                spoonacularSourceUrl: 'https://spoonacular.com/pasta-and-seafood-654812',
                nutrition: {
                    nutrients: [
                        {
                            title: 'Fat',
                            amount: 3.97495,
                            unit: 'g'
                        }
                    ]
                }
            }
        ],
        offset: 0,
        number: 2,
        totalResults: 116
    }

    const data = dataIn.map(({ vegetarian, vegan, glutenFree, dairyFree, veryHealthy, gaps, lowFodmap, sourceName, title, readyInMinutes, servings, sourceUrl, image, cuisines, dishTypes, diets, analyzedInstructions }) => {
        return {
            vegetarian,
            vegan,
            glutenFree,
            dairyFree,
            veryHealthy,
            gaps,
            lowFodmap,
            sourceName,
            title,
            readyInMinutes,
            servings,
            sourceUrl,
            image,
            cuisines,
            dishTypes,
            diets,
            analyzedInstructions
        }
    })

    return data;
}
