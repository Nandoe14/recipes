export const labelInfo = [
    'The (natural language) recipe search query.',
    'A comma-separated list of intolerances. All recipes returned must not contain ingredients that are not suitable for people with the intolerances entered.',
    'The type of recipe.',
    'A comma-separated list of ingredients that should/must be used in the recipes.',
    'The cuisine(s) of the recipes. One or more, comma separated (will be interpreted as \'OR\').',
    'A comma-separated list of ingredients or ingredient types that the recipes must not contain.',
    'The diet for which the recipes must be suitable.',
    'The maximum time in minutes it should take to prepare and cook the recipe.',
    'The maximum amount of calories the recipe can have.',
    'The minimum amount of calories the recipe must have.',
    'The maximum amount of sugar in grams the recipe can have.',
    'The minimum amount of sugar in grams the recipe must have.',
    'The number of expected results (between 2 and 8).'
]

export const truthValeArray = [false, true, true, false, true, false, true, false, false, false, false, false, false]

const liContIntolerancesArray = ['Dairy', 'Egg', 'Gluten', 'Grain', 'Peanut', 'Seafood', 'Sesame', 'Shellfish', 'Soy', 'Sulfite', 'Tree Nut', 'Wheat']
const liContCuisineArray = ['African', 'American', 'British', 'Cajun', 'Caribbean', 'Chinese', 'Eastern European', 'European', 'French', 'German', 'Greek', 'Indian', 'Irish', 'Italian', 'Japanese', 'Jewish', 'Korean', 'Latin American', 'Mediterranean', 'Mexican', 'Middle Eastern', 'Nordic', 'Southern', 'Spanish', 'Thai', 'Vietnamese']
const liContTypeArray = ['Main course', 'Side dish', 'Dessert', 'Appetizer', 'Salad', 'Bread', 'Breakfast', 'Soup', 'Beverage', 'Sauce', 'Marinade', 'Fingerfood', 'Snack', 'Drink']
const liContDietArray = ['Gluten Free', 'Ketogenic', 'Vegetarian', 'Lacto-Vegetarian', 'Ovo-Vegetarian', 'Vegan', 'Pescetarian', 'Paleo', 'Primal', 'Whole30']

export const liContArrays = ['', liContIntolerancesArray, liContTypeArray, '', liContCuisineArray, '', liContDietArray, '', '', '', '', '', '']