
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
        quantity = `${(Arr[12].value === '') ? '' : `&quantity=${Arr[12].value}`}`

    const rlink = query + intolerances + type + includeIngredients + cuisine + excludeIngredients + diet + maxReadyTime + maxCalories + minCalories + maxSugar + minSugar + quantity

    const link = `https://api.spoonacular.com/recipes/complexSearch?apiKey=API_KEY&addRecipeInformation=true${rlink}`

    // https://api.spoonacular.com/recipes/complexSearch?apiKey=API_KEY&addRecipeInformation=true&query=Pizza&intolerances=Bread&type=Lunch&includeIngredients=Apple&cuisine=Italian&excludeIngredients=Tomato&diet=Doggy&maxReadyTime=56&maxCalories=345&minCalories=234&maxSugar=23&minSugar=21&quantity=2

    console.log(link)

    // const link = `https://twinword-sentiment-analysis.p.rapidapi.com/analyze/?text=${encodeURI(text)}`

    // const resp = await fetch(link, {
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
                cheap: false,
                veryPopular: false,
                sustainable: false,
                weightWatcherSmartPoints: 11,
                gaps: 'no',
                lowFodmap: false,
                aggregateLikes: 2,
                spoonacularScore: 91,
                healthScore: 90,
                creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
                license: 'CC BY 3.0',
                sourceName: 'Foodista',
                pricePerServing: 168.12,
                id: 654959,
                title: 'Pasta With Tuna',
                readyInMinutes: 45,
                servings: 4,
                sourceUrl: 'http://www.foodista.com/recipe/K6QWSKQM/pasta-with-tuna',
                image: 'https://spoonacular.com/recipeImages/654959-312x231.jpg',
                imageType: 'jpg',
                summary: 'Pasta With Tuna might be just the main course you are searching for. One serving contains <b>421 calories</b>, <b>24g of protein</b>, and <b>10g of fat</b>. For <b>$1.68 per serving</b>, this recipe <b>covers 28%</b> of your daily requirements of vitamins and minerals. 1 person were impressed by this recipe. Head to the store and pick up flour, onion, peas, and a few other things to make it today. It is a good option if you\'re following a <b>pescatarian</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 92%</b>. This score is excellent. Try <a href="https://spoonacular.com/recipes/pasta-and-tuna-salad-ensalada-de-pasta-y-atn-226303">Pastan and Tuna Salad (Ensalada de Pasta y Atún)</a>, <a href="https://spoonacular.com/recipes/tuna-pasta-565100">Tuna Pasta</a>, and <a href="https://spoonacular.com/recipes/tuna-pasta-89136">Tuna Pasta</a> for similar recipes.',
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
                occasions: [],
                analyzedInstructions: [
                    {
                        name: '',
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
                weightWatcherSmartPoints: 10,
                gaps: 'no',
                lowFodmap: false,
                aggregateLikes: 1,
                spoonacularScore: 69,
                healthScore: 32,
                creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
                license: 'CC BY 3.0',
                sourceName: 'Foodista',
                pricePerServing: 273.29,
                id: 654857,
                title: 'Pasta On The Border',
                readyInMinutes: 45,
                servings: 4,
                sourceUrl: 'https://www.foodista.com/recipe/25DLQT8W/pasta-on-the-border',
                image: 'https://spoonacular.com/recipeImages/654857-312x231.jpg',
                imageType: 'jpg',
                summary: 'Pastan On The Border requires about <b>roughly 45 minutes</b> from start to finish. This dairy free recipe serves 4 and costs <b>$2.73 per serving</b>. This main course has <b>358 calories</b>, <b>21g of protein</b>, and <b>9g of fat</b> per serving. Only a few people made this recipe, and 1 would say it hit the spot. Head to the store and pick up evoo, pico de gallo, bell pepper, and a few other things to make it today. It is brought to you by Foodista. With a spoonacular <b>score of 69%</b>, this dish is solid. <a href="https://spoonacular.com/recipes/south-of-the-border-chicken-pasta-skillet-281789">South-of-the-Border Chicken & Pasta Skillet</a>, <a href="https://spoonacular.com/recipes/border-guacamole-21289">Border Guacamole</a>, and <a href="https://spoonacular.com/recipes/border-guacamole-101868">Border Guacamole</a> are very similar to this recipe.',
                cuisines: [],
                dishTypes: [
                    'side dish',
                    'lunch',
                    'main course',
                    'main dish',
                    'dinner'
                ],
                diets: [
                    'dairy free'
                ],
                occasions: [],
                analyzedInstructions: [
                    {
                        name: '',
                        steps: [
                            {
                                number: 1,
                                step: 'Marinate strips of flank steak in a drizzle of EVOO, 2 smashed garlic cloves, juice of 1 lime (or lemon), 4 tbs. chopped cilantro and a dash of the seasonings for an hour or two.',
                                ingredients: [
                                    {
                                        id: 10211215,
                                        name: 'whole garlic cloves',
                                        localizedName: 'whole garlic cloves',
                                        image: 'garlic.jpg'
                                    },
                                    {
                                        id: 23657,
                                        name: 'flank steak',
                                        localizedName: 'flank steak',
                                        image: 'flank-steak.jpg'
                                    },
                                    {
                                        id: 1042027,
                                        name: 'seasoning',
                                        localizedName: 'seasoning',
                                        image: 'seasoning.png'
                                    },
                                    {
                                        id: 11165,
                                        name: 'cilantro',
                                        localizedName: 'cilantro',
                                        image: 'cilantro.png'
                                    },
                                    {
                                        id: 1019016,
                                        name: 'juice',
                                        localizedName: 'juice',
                                        image: 'apple-juice.jpg'
                                    },
                                    {
                                        id: 9150,
                                        name: 'lemon',
                                        localizedName: 'lemon',
                                        image: 'lemon.png'
                                    },
                                    {
                                        id: 1034053,
                                        name: 'extra virgin olive oil',
                                        localizedName: 'extra virgin olive oil',
                                        image: 'olive-oil.jpg'
                                    },
                                    {
                                        id: 9159,
                                        name: 'lime',
                                        localizedName: 'lime',
                                        image: 'lime.jpg'
                                    }
                                ],
                                equipment: []
                            },
                            {
                                number: 2,
                                step: 'If desired, brush jalapenos with a little oil and roast in 400F preheated oven for 30-40 minutes, turning over once halfway through.',
                                ingredients: [
                                    {
                                        id: 11979,
                                        name: 'jalapeno pepper',
                                        localizedName: 'jalapeno pepper',
                                        image: 'jalapeno-pepper.png'
                                    },
                                    {
                                        id: 4582,
                                        name: 'cooking oil',
                                        localizedName: 'cooking oil',
                                        image: 'vegetable-oil.jpg'
                                    }
                                ],
                                equipment: [
                                    {
                                        id: 404784,
                                        name: 'oven',
                                        localizedName: 'oven',
                                        image: 'oven.jpg',
                                        temperature: {
                                            number: 400,
                                            unit: 'Fahrenheit'
                                        }
                                    }
                                ],
                                length: {
                                    number: 40,
                                    unit: 'minutes'
                                }
                            },
                            {
                                number: 3,
                                step: 'In a sauce pan, heat the enchilada sauce until boiling then add the beans. Stir for another couple of minutes and turn off heat.',
                                ingredients: [
                                    {
                                        id: 6599,
                                        name: 'enchilada sauce',
                                        localizedName: 'enchilada sauce',
                                        image: 'harissa.jpg'
                                    },
                                    {
                                        id: 0,
                                        name: 'beans',
                                        localizedName: 'beans',
                                        image: 'kidney-beans.jpg'
                                    },
                                    {
                                        id: 0,
                                        name: 'sauce',
                                        localizedName: 'sauce',
                                        image: ''
                                    }
                                ],
                                equipment: [
                                    {
                                        id: 404669,
                                        name: 'sauce pan',
                                        localizedName: 'sauce pan',
                                        image: 'sauce-pan.jpg'
                                    }
                                ]
                            },
                            {
                                number: 4,
                                step: 'In a medium-heated skillet, add a little EVOO and saut the beef strips along with the minced garlic and the julienned onion and bell pepper(s).',
                                ingredients: [
                                    {
                                        id: 0,
                                        name: 'minced garlic',
                                        localizedName: 'minced garlic',
                                        image: 'garlic.png'
                                    },
                                    {
                                        id: 10211821,
                                        name: 'bell pepper',
                                        localizedName: 'bell pepper',
                                        image: 'bell-pepper-orange.png'
                                    },
                                    {
                                        id: 11282,
                                        name: 'onion',
                                        localizedName: 'onion',
                                        image: 'brown-onion.png'
                                    },
                                    {
                                        id: 23572,
                                        name: 'beef',
                                        localizedName: 'beef',
                                        image: 'beef-cubes-raw.png'
                                    },
                                    {
                                        id: 1034053,
                                        name: 'extra virgin olive oil',
                                        localizedName: 'extra virgin olive oil',
                                        image: 'olive-oil.jpg'
                                    }
                                ],
                                equipment: [
                                    {
                                        id: 404645,
                                        name: 'frying pan',
                                        localizedName: 'frying pan',
                                        image: 'pan.png'
                                    }
                                ]
                            },
                            {
                                number: 5,
                                step: 'Stack the tortillas on top of each other and roll as tight as you can without tearing it. Now, using a very sharp knife, thinly slice the roll from one end to the other creating fettuccine-like strands. Loosen strands and coat with EVOO and a dash of the seasonings.',
                                ingredients: [
                                    {
                                        id: 10020409,
                                        name: 'fettuccine',
                                        localizedName: 'fettuccine',
                                        image: 'egg-noodles.jpg'
                                    },
                                    {
                                        id: 1042027,
                                        name: 'seasoning',
                                        localizedName: 'seasoning',
                                        image: 'seasoning.png'
                                    },
                                    {
                                        id: 18364,
                                        name: 'tortilla',
                                        localizedName: 'tortilla',
                                        image: 'flour-tortilla.jpg'
                                    },
                                    {
                                        id: 1034053,
                                        name: 'extra virgin olive oil',
                                        localizedName: 'extra virgin olive oil',
                                        image: 'olive-oil.jpg'
                                    },
                                    {
                                        id: 0,
                                        name: 'roll',
                                        localizedName: 'roll',
                                        image: 'dinner-yeast-rolls.jpg'
                                    }
                                ],
                                equipment: [
                                    {
                                        id: 404745,
                                        name: 'knife',
                                        localizedName: 'knife',
                                        image: 'chefs-knife.jpg'
                                    }
                                ]
                            },
                            {
                                number: 6,
                                step: 'Spread tortilla strands out on individual serving platters, top each with enchilada/bean mixture, salsa and beef/veggie mixture.',
                                ingredients: [
                                    {
                                        id: 18364,
                                        name: 'tortilla',
                                        localizedName: 'tortilla',
                                        image: 'flour-tortilla.jpg'
                                    },
                                    {
                                        id: 0,
                                        name: 'spread',
                                        localizedName: 'spread',
                                        image: ''
                                    },
                                    {
                                        id: 6164,
                                        name: 'salsa',
                                        localizedName: 'salsa',
                                        image: 'salsa.png'
                                    },
                                    {
                                        id: 23572,
                                        name: 'beef',
                                        localizedName: 'beef',
                                        image: 'beef-cubes-raw.png'
                                    }
                                ],
                                equipment: []
                            },
                            {
                                number: 7,
                                step: 'Garnish with remaining chopped cilantro, a lime (or lemon) wedge and a roasted jalapeno pepper.',
                                ingredients: [
                                    {
                                        id: 11979,
                                        name: 'jalapeno pepper',
                                        localizedName: 'jalapeno pepper',
                                        image: 'jalapeno-pepper.png'
                                    },
                                    {
                                        id: 11165,
                                        name: 'cilantro',
                                        localizedName: 'cilantro',
                                        image: 'cilantro.png'
                                    },
                                    {
                                        id: 9150,
                                        name: 'lemon',
                                        localizedName: 'lemon',
                                        image: 'lemon.png'
                                    },
                                    {
                                        id: 9159,
                                        name: 'lime',
                                        localizedName: 'lime',
                                        image: 'lime.jpg'
                                    }
                                ],
                                equipment: []
                            },
                            {
                                number: 8,
                                step: 'Another optional item you can add is shredded cheese. Before garnishing, top with shredded cheese and pop the plate in the microwave for a minute or until cheese has fully melted.',
                                ingredients: [
                                    {
                                        id: 1011026,
                                        name: 'shredded cheese',
                                        localizedName: 'shredded cheese',
                                        image: 'cheddar-cheese.png'
                                    },
                                    {
                                        id: 1041009,
                                        name: 'cheese',
                                        localizedName: 'cheese',
                                        image: 'cheddar-cheese.png'
                                    },
                                    {
                                        id: 0,
                                        name: 'pop',
                                        localizedName: 'pop',
                                        image: ''
                                    }
                                ],
                                equipment: [
                                    {
                                        id: 404762,
                                        name: 'microwave',
                                        localizedName: 'microwave',
                                        image: 'microwave.jpg'
                                    }
                                ]
                            }
                        ]
                    }
                ],
                spoonacularSourceUrl: 'https://spoonacular.com/pasta-on-the-border-654857',
                nutrition: {
                    nutrients: [
                        {
                            title: 'Fat',
                            amount: 8.85326,
                            unit: 'g'
                        }
                    ]
                }
            },
            {
                vegetarian: false,
                vegan: false,
                glutenFree: false,
                dairyFree: false,
                veryHealthy: false,
                cheap: false,
                veryPopular: false,
                sustainable: false,
                weightWatcherSmartPoints: 3,
                gaps: 'no',
                lowFodmap: false,
                aggregateLikes: 1,
                spoonacularScore: 72,
                healthScore: 27,
                creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
                license: 'CC BY 3.0',
                sourceName: 'Foodista',
                pricePerServing: 67.61,
                id: 654883,
                title: 'Pasta Vegetable Soup',
                readyInMinutes: 45,
                servings: 10,
                sourceUrl: 'http://www.foodista.com/recipe/FR8FKR4F/pasta-vegetable-soup',
                image: 'https://spoonacular.com/recipeImages/654883-312x231.jpg',
                imageType: 'jpg',
                summary: 'Pasta Vegetable Soup might be just the soup you are searching for. For <b>64 cents per serving</b>, this recipe <b>covers 14%</b> of your daily requirements of vitamins and minerals. One serving contains <b>167 calories</b>, <b>10g of protein</b>, and <b>3g of fat</b>. It is perfect for <b>Autumn</b>. Only a few people made this recipe, and 1 would say it hit the spot. A mixture of onion, water, thyme, and a handful of other ingredients are all it takes to make this recipe so flavorful. From preparation to the plate, this recipe takes around <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 78%</b>. This score is good. Try <a href="https://spoonacular.com/recipes/beef-and-pasta-vegetable-soup-411736">Beef and Pasta Vegetable Soup</a>, <a href="https://spoonacular.com/recipes/pantry-vegetable-and-pasta-soup-530939">Pantry Vegetable and Pasta Soup</a>, and <a href="https://spoonacular.com/recipes/easy-vegetable-soup-with-pasta-699450">Easy Vegetable Soup with Pasta</a> for similar recipes.',
                cuisines: [],
                dishTypes: [
                    'soup'
                ],
                diets: [],
                occasions: [
                    'fall',
                    'winter'
                ],
                analyzedInstructions: [
                    {
                        name: '',
                        steps: [
                            {
                                number: 1,
                                step: 'In a large sauce pan, combine 4 cups water, onion, carrot, celery, brown sugar, basil, marjoram, oregano, thyme, pepper, garlic, chicken broth, tomatoes, beans, and tomato paste then bring to a boil. Cover, reduce heat, and simmer 45 minutes.',
                                ingredients: [
                                    {
                                        id: 6194,
                                        name: 'chicken broth',
                                        localizedName: 'chicken broth',
                                        image: 'chicken-broth.png'
                                    },
                                    {
                                        id: 11887,
                                        name: 'tomato paste',
                                        localizedName: 'tomato paste',
                                        image: 'tomato-paste.jpg'
                                    },
                                    {
                                        id: 19334,
                                        name: 'brown sugar',
                                        localizedName: 'brown sugar',
                                        image: 'dark-brown-sugar.png'
                                    },
                                    {
                                        id: 2023,
                                        name: 'marjoram',
                                        localizedName: 'marjoram',
                                        image: 'marjoram.jpg'
                                    },
                                    {
                                        id: 11529,
                                        name: 'tomato',
                                        localizedName: 'tomato',
                                        image: 'tomato.png'
                                    },
                                    {
                                        id: 2027,
                                        name: 'oregano',
                                        localizedName: 'oregano',
                                        image: 'oregano.jpg'
                                    },
                                    {
                                        id: 11124,
                                        name: 'carrot',
                                        localizedName: 'carrot',
                                        image: 'sliced-carrot.png'
                                    },
                                    {
                                        id: 11143,
                                        name: 'celery',
                                        localizedName: 'celery',
                                        image: 'celery.jpg'
                                    },
                                    {
                                        id: 11215,
                                        name: 'garlic',
                                        localizedName: 'garlic',
                                        image: 'garlic.png'
                                    },
                                    {
                                        id: 1002030,
                                        name: 'pepper',
                                        localizedName: 'pepper',
                                        image: 'pepper.jpg'
                                    },
                                    {
                                        id: 2044,
                                        name: 'basil',
                                        localizedName: 'basil',
                                        image: 'basil.jpg'
                                    },
                                    {
                                        id: 0,
                                        name: 'beans',
                                        localizedName: 'beans',
                                        image: 'kidney-beans.jpg'
                                    },
                                    {
                                        id: 11282,
                                        name: 'onion',
                                        localizedName: 'onion',
                                        image: 'brown-onion.png'
                                    },
                                    {
                                        id: 0,
                                        name: 'sauce',
                                        localizedName: 'sauce',
                                        image: ''
                                    },
                                    {
                                        id: 2049,
                                        name: 'thyme',
                                        localizedName: 'thyme',
                                        image: 'thyme.jpg'
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
                                    number: 45,
                                    unit: 'minutes'
                                }
                            },
                            {
                                number: 2,
                                step: 'Add remaining 2 cups water; bring to a boil. Stir in macaroni, and cook an additional 8 minutes. Ladle into soup bowls; top with Parmesan cheese.',
                                ingredients: [
                                    {
                                        id: 1033,
                                        name: 'parmesan',
                                        localizedName: 'parmesan',
                                        image: 'parmesan.jpg'
                                    },
                                    {
                                        id: 20499,
                                        name: 'macaroni',
                                        localizedName: 'macaroni',
                                        image: 'macaroni.png'
                                    },
                                    {
                                        id: 14412,
                                        name: 'water',
                                        localizedName: 'water',
                                        image: 'water.png'
                                    },
                                    {
                                        id: 0,
                                        name: 'soup',
                                        localizedName: 'soup',
                                        image: ''
                                    }
                                ],
                                equipment: [
                                    {
                                        id: 404783,
                                        name: 'bowl',
                                        localizedName: 'bowl',
                                        image: 'bowl.jpg'
                                    },
                                    {
                                        id: 404630,
                                        name: 'ladle',
                                        localizedName: 'ladle',
                                        image: 'ladle.jpg'
                                    }
                                ],
                                length: {
                                    number: 8,
                                    unit: 'minutes'
                                }
                            }
                        ]
                    }
                ],
                spoonacularSourceUrl: 'https://spoonacular.com/pasta-vegetable-soup-654883',
                nutrition: {
                    nutrients: [
                        {
                            title: 'Fat',
                            amount: 3.17914,
                            unit: 'g'
                        }
                    ]
                }
            },
            {
                vegetarian: false,
                vegan: false,
                glutenFree: false,
                dairyFree: false,
                veryHealthy: false,
                cheap: false,
                veryPopular: false,
                sustainable: false,
                weightWatcherSmartPoints: 14,
                gaps: 'no',
                lowFodmap: false,
                aggregateLikes: 1,
                spoonacularScore: 23,
                healthScore: 2,
                creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
                license: 'CC BY 3.0',
                sourceName: 'Foodista',
                pricePerServing: 67.99,
                id: 654926,
                title: 'Pasta With Gorgonzola Sauce',
                readyInMinutes: 45,
                servings: 8,
                sourceUrl: 'http://www.foodista.com/recipe/SJLPWK55/pasta-with-gorgonzola-sauce',
                image: 'https://spoonacular.com/recipeImages/654926-312x231.jpg',
                imageType: 'jpg',
                summary: 'Pasta With Gorgonzola Sauce might be just the side dish you are searching for. This recipe makes 8 servings with <b>379 calories</b>, <b>11g of protein</b>, and <b>25g of fat</b> each. For <b>68 cents per serving</b>, this recipe <b>covers 8%</b> of your daily requirements of vitamins and minerals. Only a few people made this recipe, and 1 would say it hit the spot. From preparation to the plate, this recipe takes around <b>45 minutes</b>. A mixture of cup whipping cream, pkt pasta, half and half, and a handful of other ingredients are all it takes to make this recipe so scrumptious. All things considered, we decided this recipe <b>deserves a spoonacular score of 25%</b>. This score is not so awesome. Try <a href="https://spoonacular.com/recipes/chocolate-pasta-with-gorgonzola-cream-sauce-and-10-romantic-pasta-dishes-532706">Chocolate Pasta with Gorgonzola Cream Sauce and 10 Romantic Pasta Dishes</a>, <a href="https://spoonacular.com/recipes/pasta-with-kale-and-gorgonzola-sauce-594400">Pasta with Kale and Gorgonzola Sauce</a>, and <a href="https://spoonacular.com/recipes/tagliatelle-pasta-with-asparagus-and-gorgonzola-sauce-162657">Tagliatelle Pasta with Asparagus and Gorgonzola Sauce</a> for similar recipes.',
                cuisines: [],
                dishTypes: [
                    'side dish'
                ],
                diets: [],
                occasions: [],
                analyzedInstructions: [
                    {
                        name: '',
                        steps: [
                            {
                                number: 1,
                                step: 'In an enamel saucepan, melt the butter over low heat, add the Gorgonzola cheese, Half and Half, and salt. Mash the Gorgonzola with a wooden spoon and stir to mix over a low flame. Cook about 1 minute until sauce becomes thick and creamy. In the meantime, cook the pasta according to the package directions and drain. Just before fettuccini is done, stir the whipping cream into the cheese sauce over a low flame.',
                                ingredients: [
                                    {
                                        id: 1011004,
                                        name: 'gorgonzola',
                                        localizedName: 'gorgonzola',
                                        image: 'gorgonzola.jpg'
                                    },
                                    {
                                        id: 1001053,
                                        name: 'whipping cream',
                                        localizedName: 'whipping cream',
                                        image: 'fluid-cream.jpg'
                                    },
                                    {
                                        id: 1049,
                                        name: 'half and half',
                                        localizedName: 'half and half',
                                        image: 'fluid-cream.jpg'
                                    },
                                    {
                                        id: 0,
                                        name: 'cheese sauce',
                                        localizedName: 'cheese sauce',
                                        image: ''
                                    },
                                    {
                                        id: 10020409,
                                        name: 'fettuccine',
                                        localizedName: 'fettuccine',
                                        image: 'egg-noodles.jpg'
                                    },
                                    {
                                        id: 1001,
                                        name: 'butter',
                                        localizedName: 'butter',
                                        image: 'butter-sliced.jpg'
                                    },
                                    {
                                        id: 20420,
                                        name: 'pasta',
                                        localizedName: 'pasta',
                                        image: 'fusilli.jpg'
                                    },
                                    {
                                        id: 0,
                                        name: 'sauce',
                                        localizedName: 'sauce',
                                        image: ''
                                    },
                                    {
                                        id: 2047,
                                        name: 'salt',
                                        localizedName: 'salt',
                                        image: 'salt.jpg'
                                    }
                                ],
                                equipment: [
                                    {
                                        id: 404732,
                                        name: 'wooden spoon',
                                        localizedName: 'wooden spoon',
                                        image: 'wooden-spoon.jpg'
                                    },
                                    {
                                        id: 404669,
                                        name: 'sauce pan',
                                        localizedName: 'sauce pan',
                                        image: 'sauce-pan.jpg'
                                    }
                                ],
                                length: {
                                    number: 1,
                                    unit: 'minutes'
                                }
                            },
                            {
                                number: 2,
                                step: 'Place the pasta on a warm platter and pour sauce over. Toss until coat',
                                ingredients: [
                                    {
                                        id: 20420,
                                        name: 'pasta',
                                        localizedName: 'pasta',
                                        image: 'fusilli.jpg'
                                    },
                                    {
                                        id: 0,
                                        name: 'sauce',
                                        localizedName: 'sauce',
                                        image: ''
                                    }
                                ],
                                equipment: []
                            }
                        ]
                    }
                ],
                spoonacularSourceUrl: 'https://spoonacular.com/pasta-with-gorgonzola-sauce-654926',
                nutrition: {
                    nutrients: [
                        {
                            title: 'Fat',
                            amount: 24.8592,
                            unit: 'g'
                        }
                    ]
                }
            },
            {
                vegetarian: false,
                vegan: false,
                glutenFree: false,
                dairyFree: false,
                veryHealthy: false,
                cheap: false,
                veryPopular: false,
                sustainable: false,
                weightWatcherSmartPoints: 13,
                gaps: 'no',
                lowFodmap: false,
                aggregateLikes: 3,
                spoonacularScore: 67,
                healthScore: 21,
                creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
                license: 'CC BY 3.0',
                sourceName: 'Foodista',
                pricePerServing: 160.13,
                id: 654944,
                title: 'Pasta With Salmon Cream Sauce',
                readyInMinutes: 45,
                servings: 4,
                sourceUrl: 'http://www.foodista.com/recipe/WRF73JT3/pasta-with-salmon-cream-sauce',
                image: 'https://spoonacular.com/recipeImages/654944-312x231.jpg',
                imageType: 'jpg',
                summary: 'Pasta With Salmon Cream Sauce is a <b>pescatarian</b> main course. This recipe makes 4 servings with <b>439 calories</b>, <b>23g of protein</b>, and <b>15g of fat</b> each. For <b>$1.6 per serving</b>, this recipe <b>covers 23%</b> of your daily requirements of vitamins and minerals. 3 people have made this recipe and would make it again. If you have onion, parsley, milk, and a few other ingredients on hand, you can make it. To use up the milk you could follow this main course with the <a href="https://spoonacular.com/recipes/milky-way-brownie-bites-540544">Milky Way Brownie Bites</a> as a dessert. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 69%</b>. This score is pretty good. Try <a href="https://spoonacular.com/recipes/spinach-pasta-with-salmon-and-cream-sauce-86877">Spinach Pasta with Salmon and Cream Sauce</a>, <a href="https://spoonacular.com/recipes/artisan-farfalle-pasta-with-smoked-salmon-and-cream-sauce-632778">Artisan Farfalle Pasta With Smoked Salmon and Cream Sauce</a>, and <a href="https://spoonacular.com/recipes/chocolate-pasta-with-gorgonzola-cream-sauce-and-10-romantic-pasta-dishes-532706">Chocolate Pasta with Gorgonzola Cream Sauce and 10 Romantic Pasta Dishes</a> for similar recipes.',
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
                occasions: [],
                analyzedInstructions: [
                    {
                        name: '',
                        steps: [
                            {
                                number: 1,
                                step: 'Calories per serving: 300 In large pot of boiling water, cook pasta al dente (tender but firm) about 10 12 minutes.',
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
                                ],
                                length: {
                                    number: 12,
                                    unit: 'minutes'
                                }
                            },
                            {
                                number: 2,
                                step: 'Drain and return to pot. In saucepan, melt butter over medium heat add onion and cook until tender.Stir in flour and cook for a few seconds.',
                                ingredients: [
                                    {
                                        id: 1001,
                                        name: 'butter',
                                        localizedName: 'butter',
                                        image: 'butter-sliced.jpg'
                                    },
                                    {
                                        id: 20081,
                                        name: 'all purpose flour',
                                        localizedName: 'all purpose flour',
                                        image: 'flour.png'
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
                                step: 'Whisk in milk and bring to sa simmer, stirring constantly.',
                                ingredients: [
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
                                step: 'Add peas, salmon brokin into chunks and salmon juices, parsley, cheese, pepper.',
                                ingredients: [
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
                                        id: 1002030,
                                        name: 'pepper',
                                        localizedName: 'pepper',
                                        image: 'pepper.jpg'
                                    },
                                    {
                                        id: 15076,
                                        name: 'salmon',
                                        localizedName: 'salmon',
                                        image: 'salmon.png'
                                    },
                                    {
                                        id: 11304,
                                        name: 'peas',
                                        localizedName: 'peas',
                                        image: 'peas.jpg'
                                    }
                                ],
                                equipment: []
                            },
                            {
                                number: 5,
                                step: 'Pour mixture over pasta and stir gently to mix.',
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
                                step: 'Serve Immediately. Microwave method: Cook pasta as above in glass bowl or 4 cup measure. Microwave butter and onion at Medium-High for 1 minute or until onion is tender. Stir in flour to form smooth paste. Gradually whisk in milk.',
                                ingredients: [
                                    {
                                        id: 1001,
                                        name: 'butter',
                                        localizedName: 'butter',
                                        image: 'butter-sliced.jpg'
                                    },
                                    {
                                        id: 20081,
                                        name: 'all purpose flour',
                                        localizedName: 'all purpose flour',
                                        image: 'flour.png'
                                    },
                                    {
                                        id: 11282,
                                        name: 'onion',
                                        localizedName: 'onion',
                                        image: 'brown-onion.png'
                                    },
                                    {
                                        id: 20420,
                                        name: 'pasta',
                                        localizedName: 'pasta',
                                        image: 'fusilli.jpg'
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
                                        id: 404762,
                                        name: 'microwave',
                                        localizedName: 'microwave',
                                        image: 'microwave.jpg'
                                    },
                                    {
                                        id: 404661,
                                        name: 'whisk',
                                        localizedName: 'whisk',
                                        image: 'whisk.png'
                                    },
                                    {
                                        id: 404783,
                                        name: 'bowl',
                                        localizedName: 'bowl',
                                        image: 'bowl.jpg'
                                    }
                                ],
                                length: {
                                    number: 1,
                                    unit: 'minutes'
                                }
                            }
                        ]
                    }
                ],
                spoonacularSourceUrl: 'https://spoonacular.com/pasta-with-salmon-cream-sauce-654944',
                nutrition: {
                    nutrients: [
                        {
                            title: 'Fat',
                            amount: 14.5858,
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
                veryHealthy: true,
                cheap: false,
                veryPopular: false,
                sustainable: false,
                weightWatcherSmartPoints: 16,
                gaps: 'no',
                lowFodmap: false,
                aggregateLikes: 2,
                spoonacularScore: 94,
                healthScore: 100,
                creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
                license: 'CC BY 3.0',
                sourceName: 'Foodista',
                pricePerServing: 142.74,
                id: 654905,
                title: 'Pasta With Chickpeas and Kale',
                readyInMinutes: 45,
                servings: 4,
                sourceUrl: 'http://www.foodista.com/recipe/4BTWKPRC/pasta-with-chickpeas-and-kale',
                image: 'https://spoonacular.com/recipeImages/654905-312x231.jpg',
                imageType: 'jpg',
                summary: 'Pasta With Chickpeas and Kale might be just the main course you are searching for. One serving contains <b>655 calories</b>, <b>27g of protein</b>, and <b>9g of fat</b>. For <b>$1.43 per serving</b>, this recipe <b>covers 43%</b> of your daily requirements of vitamins and minerals. This recipe from Foodista has 1 fans. It is a good option if you\'re following a <b>dairy free</b> diet. From preparation to the plate, this recipe takes around <b>45 minutes</b>. A mixture of bell pepper, ziti, kale, and a handful of other ingredients are all it takes to make this recipe so flavorful. To use up the salt and pepper you could follow this main course with the <a href="https://spoonacular.com/recipes/dr-pepper-cake-with-flour-cooked-frosting-539165">Dr. Pepper Cake with Flour Cooked Frosting</a> as a dessert. All things considered, we decided this recipe <b>deserves a spoonacular score of 93%</b>. This score is spectacular. Similar recipes include <a href="https://spoonacular.com/recipes/curried-chickpeas-and-kale-158454">Curried Chickpeas and Kale</a>, <a href="https://spoonacular.com/recipes/creamed-kale-with-chickpeas-608963">Creamed kale with chickpeas</a>, and <a href="https://spoonacular.com/recipes/sauted-chickpeas-with-ham-and-kale-15237">Sautéed Chickpeas with Ham and Kale</a>.',
                cuisines: [],
                dishTypes: [
                    'lunch',
                    'main course',
                    'main dish',
                    'dinner'
                ],
                diets: [
                    'dairy free'
                ],
                occasions: [],
                analyzedInstructions: [
                    {
                        name: '',
                        steps: [
                            {
                                number: 1,
                                step: 'Set a large pot of water to boil, and add salt.',
                                ingredients: [
                                    {
                                        id: 14412,
                                        name: 'water',
                                        localizedName: 'water',
                                        image: 'water.png'
                                    },
                                    {
                                        id: 2047,
                                        name: 'salt',
                                        localizedName: 'salt',
                                        image: 'salt.jpg'
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
                                step: 'Cut the kale stems into 2-3 inch pieces; chop the leaves coarsely and set aside. Boil the stems until they are nearly tender; then, add the greens. Cook until kale is quite tender but stillbright green. Scoop it out with a slotted spoon, place in a bowl of ice water, and keep pot boiling. When the kale cools, squeeze out excess water, gather it into a mass and chop rather finely. Meanwhile, place olive oil in a large skillet over veWarm the garlic mixture over medium heat, and add the cooked pasta, the chickpeas and the chopped kale.Toss well, taste for seasoning, garnish with parsley and serve immediately.',
                                ingredients: [
                                    {
                                        id: 20421,
                                        name: 'cooked pasta',
                                        localizedName: 'cooked pasta',
                                        image: 'fusilli.jpg'
                                    },
                                    {
                                        id: 16057,
                                        name: 'chickpeas',
                                        localizedName: 'chickpeas',
                                        image: 'chickpeas.png'
                                    },
                                    {
                                        id: 14412,
                                        name: 'water',
                                        localizedName: 'water',
                                        image: 'water.png'
                                    },
                                    {
                                        id: 4053,
                                        name: 'olive oil',
                                        localizedName: 'olive oil',
                                        image: 'olive-oil.jpg'
                                    },
                                    {
                                        id: 1042027,
                                        name: 'seasoning',
                                        localizedName: 'seasoning',
                                        image: 'seasoning.png'
                                    },
                                    {
                                        id: 11297,
                                        name: 'parsley',
                                        localizedName: 'parsley',
                                        image: 'parsley.jpg'
                                    },
                                    {
                                        id: 11215,
                                        name: 'garlic',
                                        localizedName: 'garlic',
                                        image: 'garlic.png'
                                    },
                                    {
                                        id: 21052,
                                        name: 'greens',
                                        localizedName: 'greens',
                                        image: 'mixed-greens-or-mesclun.jpg'
                                    },
                                    {
                                        id: 11233,
                                        name: 'kale',
                                        localizedName: 'kale',
                                        image: 'kale.jpg'
                                    }
                                ],
                                equipment: [
                                    {
                                        id: 404636,
                                        name: 'slotted spoon',
                                        localizedName: 'slotted spoon',
                                        image: 'slotted-spoon.jpg'
                                    },
                                    {
                                        id: 404645,
                                        name: 'frying pan',
                                        localizedName: 'frying pan',
                                        image: 'pan.png'
                                    },
                                    {
                                        id: 404783,
                                        name: 'bowl',
                                        localizedName: 'bowl',
                                        image: 'bowl.jpg'
                                    },
                                    {
                                        id: 404752,
                                        name: 'pot',
                                        localizedName: 'pot',
                                        image: 'stock-pot.jpg'
                                    }
                                ]
                            }
                        ]
                    }
                ],
                spoonacularSourceUrl: 'https://spoonacular.com/pasta-with-chickpeas-and-kale-654905',
                nutrition: {
                    nutrients: [
                        {
                            title: 'Fat',
                            amount: 8.52156,
                            unit: 'g'
                        }
                    ]
                }
            },
            {
                vegetarian: false,
                vegan: false,
                glutenFree: false,
                dairyFree: false,
                veryHealthy: false,
                cheap: false,
                veryPopular: false,
                sustainable: false,
                weightWatcherSmartPoints: 8,
                gaps: 'no',
                lowFodmap: false,
                aggregateLikes: 3,
                spoonacularScore: 55,
                healthScore: 15,
                creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
                license: 'CC BY 3.0',
                sourceName: 'Foodista',
                pricePerServing: 145.96,
                id: 654901,
                title: 'Pasta With Chicken and Broccoli',
                readyInMinutes: 45,
                servings: 4,
                sourceUrl: 'https://www.foodista.com/recipe/Y5X6DRHT/pasta-with-chicken-and-broccoli',
                image: 'https://spoonacular.com/recipeImages/654901-312x231.jpg',
                imageType: 'jpg',
                summary: 'Pasta With Chicken and Broccoli might be a good recipe to expand your main course repertoire. This recipe makes 4 servings with <b>332 calories</b>, <b>19g of protein</b>, and <b>18g of fat</b> each. For <b>$1.46 per serving</b>, this recipe <b>covers 16%</b> of your daily requirements of vitamins and minerals. 3 people found this recipe to be flavorful and satisfying. A mixture of wine, parmesan cheese, basil leaves, and a handful of other ingredients are all it takes to make this recipe so yummy. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately <b>approximately 45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 55%</b>, which is solid. Similar recipes are <a href="https://spoonacular.com/recipes/pasta-house-pasta-con-broccoli-this-is-an-alfredo-based-sauce-that-combines-pasta-fresh-mushrooms-and-fresh-broccoli-601199">Pasta House Pasta con Broccoli – This is an Alfredo based sauce that combines pasta, fresh mushrooms, and fresh broccoli</a>, <a href="https://spoonacular.com/recipes/broccoli-and-pasta-with-chicken-479320">Broccoli and Pasta with Chicken</a>, and <a href="https://spoonacular.com/recipes/pasta-with-chicken-and-broccoli-110475">Pasta With Chicken and Broccoli</a>.',
                cuisines: [],
                dishTypes: [
                    'side dish',
                    'lunch',
                    'main course',
                    'main dish',
                    'dinner'
                ],
                diets: [],
                occasions: [],
                analyzedInstructions: [
                    {
                        name: '',
                        steps: [
                            {
                                number: 1,
                                step: 'In a large skillet, heat oil over medium heat.',
                                ingredients: [
                                    {
                                        id: 4582,
                                        name: 'cooking oil',
                                        localizedName: 'cooking oil',
                                        image: 'vegetable-oil.jpg'
                                    }
                                ],
                                equipment: [
                                    {
                                        id: 404645,
                                        name: 'frying pan',
                                        localizedName: 'frying pan',
                                        image: 'pan.png'
                                    }
                                ]
                            },
                            {
                                number: 2,
                                step: 'Sautee garlic for about one minute, stirring constantly. DO NOT BURN.',
                                ingredients: [
                                    {
                                        id: 11215,
                                        name: 'garlic',
                                        localizedName: 'garlic',
                                        image: 'garlic.png'
                                    }
                                ],
                                equipment: [],
                                length: {
                                    number: 1,
                                    unit: 'minutes'
                                }
                            },
                            {
                                number: 3,
                                step: 'Add the chicken and cook until well done.',
                                ingredients: [
                                    {
                                        id: 5006,
                                        name: 'whole chicken',
                                        localizedName: 'whole chicken',
                                        image: 'whole-chicken.jpg'
                                    }
                                ],
                                equipment: []
                            },
                            {
                                number: 4,
                                step: 'Add the broccoli and cook until crisp but tender.',
                                ingredients: [
                                    {
                                        id: 11090,
                                        name: 'broccoli',
                                        localizedName: 'broccoli',
                                        image: 'broccoli.jpg'
                                    }
                                ],
                                equipment: []
                            },
                            {
                                number: 5,
                                step: 'Add basil; red pepper; salt and pepper to taste; wine and chicken broth. cook for about 5 minutes.',
                                ingredients: [
                                    {
                                        id: 1102047,
                                        name: 'salt and pepper',
                                        localizedName: 'salt and pepper',
                                        image: 'salt-and-pepper.jpg'
                                    },
                                    {
                                        id: 6194,
                                        name: 'chicken broth',
                                        localizedName: 'chicken broth',
                                        image: 'chicken-broth.png'
                                    },
                                    {
                                        id: 11821,
                                        name: 'red pepper',
                                        localizedName: 'red pepper',
                                        image: 'red-pepper.jpg'
                                    },
                                    {
                                        id: 2044,
                                        name: 'basil',
                                        localizedName: 'basil',
                                        image: 'basil.jpg'
                                    },
                                    {
                                        id: 14084,
                                        name: 'wine',
                                        localizedName: 'wine',
                                        image: 'red-wine.jpg'
                                    }
                                ],
                                equipment: [],
                                length: {
                                    number: 5,
                                    unit: 'minutes'
                                }
                            },
                            {
                                number: 6,
                                step: 'Add the cooked and drained pasta to the skillet and toss to combine.',
                                ingredients: [
                                    {
                                        id: 20420,
                                        name: 'pasta',
                                        localizedName: 'pasta',
                                        image: 'fusilli.jpg'
                                    }
                                ],
                                equipment: [
                                    {
                                        id: 404645,
                                        name: 'frying pan',
                                        localizedName: 'frying pan',
                                        image: 'pan.png'
                                    }
                                ]
                            },
                            {
                                number: 7,
                                step: 'Heat for 1 to 2 minutes',
                                ingredients: [],
                                equipment: []
                            },
                            {
                                number: 8,
                                step: 'Serve.',
                                ingredients: [],
                                equipment: []
                            },
                            {
                                number: 9,
                                step: 'Top with grated Parmesan cheese if desired.',
                                ingredients: [
                                    {
                                        id: 1032,
                                        name: 'grated parmesan cheese',
                                        localizedName: 'grated parmesan cheese',
                                        image: 'parmesan.jpg'
                                    }
                                ],
                                equipment: []
                            }
                        ]
                    }
                ],
                spoonacularSourceUrl: 'https://spoonacular.com/pasta-with-chicken-and-broccoli-654901',
                nutrition: {
                    nutrients: [
                        {
                            title: 'Fat',
                            amount: 17.6731,
                            unit: 'g'
                        }
                    ]
                }
            }
        ],
        offset: 0,
        number: 8,
        totalResults: 116
    }

    const { results } = dataIn

    const data = results.map(({ vegetarian, vegan, glutenFree, dairyFree, veryHealthy, gaps, lowFodmap, title, readyInMinutes, servings, sourceUrl, image, dishTypes, diets, analyzedInstructions }) => {
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

    return data;
}
