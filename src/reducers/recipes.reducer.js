import { recipesConstants } from "../constants";
  
  const initialState = {
    recipes: [],
    recipe: {
        title: '',
        creatorName: '',
        description: '',
        servings: 1,
        step: recipesConstants.DATA,
        nutrition: {
            calories: 0,
            protein: 0,
            fat: 0,
            carbohydrates: 0,
            sodium: 0,
        },
        ingredients: [{ingredient: '', type: 'Scale', size: 1}],
        recipeSteps: '',
        file: '',
    },
    errors: {},
  };

  export function recipes(state = initialState, action) {
    const nutritionOptions = ['calories', 'protein', 'fat', 'carbohydrates', 'sodium'];
    const ingredientsOptions = ['ingredient', 'type', 'size'];

    switch (action.type) {
        ///////////////////// CHANGE STEP ///////////////////
        case recipesConstants.CHANGE_STEP:
            const recipe = { ...state.recipe, step: action.step};
            return { ...state, recipe };

        ///////////////////// RECIPE FIELDS ///////////////////
        case recipesConstants.ADD_EMPTY_FIELD:
            const { ingredients } = state.recipe;
            ingredients.push({ingredient: '', type: 'Scale', size: 1});
            return { ...state, recipe: { ...state.recipe, ingredients} };  

        case recipesConstants.CHANGE_FIELDS:
            const { recipe: recipeOld } = state;
            if (nutritionOptions.includes(action.name)) {
                recipeOld.nutrition[action.name] = action.value;
                return { ...state, recipe: recipeOld }
            }
            if (ingredientsOptions.includes(action.name)) {                
                recipeOld.ingredients[action.index][action.name] = action.value;
                return { ...state, recipe: recipeOld }
            }
            recipeOld[action.name] = action.value;
            return { ...state, recipe: recipeOld };              

        ///////////////////// CREATE RECIPE ///////////////////
        case recipesConstants.CREATE_RECIPE_REQUEST:
          return {
            ...state,
          };             
        case recipesConstants.CREATE_RECIPE_SUCCESS:
          return {
            ...state,
            recipe: action.recipe,
          };  
        case recipesConstants.CREATE_RECIPE_FAILURE:
          return {
            ...state,
          };          
          
        //////////////////// VIEW Recipes //////////////////
        case recipesConstants.GET_RECIPES_REQUEST:
          return {
            ...state,
          };             
        case recipesConstants.GET_RECIPES_SUCCESS:
          return {
            ...state,
            recipes: action.recipes,
          };  
        case recipesConstants.GET_RECIPES_FAILURE:
          return {
            ...state,
          };

        /////////////////// VIEW RECIPE //////////////////
        case recipesConstants.GET_RECIPE_DATA_REQUEST:
          return {
            ...state,
          };             
        case recipesConstants.GET_RECIPE_DATA_SUCCESS:
                state.recipe.title = action.recipeData.title;
                state.recipe.creatorName = action.recipeData.creatorName;
                state.recipe.servings = action.recipeData.servings;
                state.recipe.description = action.recipeData.description;
                state.recipe.nutrition = action.recipeData.nutritionFacts;
                state.recipe.ingredients = action.recipeData.ingredients;
                state.recipe.recipeSteps = action.recipeData.recipeSteps;
                state.recipe._id = action.recipeData._id;
                state.recipe.createdAt = action.recipeData.createdAt;
                state.recipe.views = action.recipeData.views;
                state.recipe.file = action.recipeData.image;
          return { ...state };  
        case recipesConstants.GET_RECIPE_DATA_FAILURE:
          return { ...state };     
          
        /////////////////// UPDATE RECIPE //////////////////
        case recipesConstants.UPDATE_RECIPE_REQUEST:
          return { ...state };             
        case recipesConstants.UPDATE_RECIPE_SUCCESS:
          return { ...state };  
        case recipesConstants.UPDATE_RECIPE_FAILURE:
          return { ...state };               

        //////////////////////// DELETE //////////////////////
        case recipesConstants.DELETE_RECIPE_REQUEST:
          return {
            ...state,
          };             
        case recipesConstants.DELETE_RECIPE_SUCCESS:
          return {
            ...state,
            recipes: action.recipes,
          };  
        case recipesConstants.DELETE_RECIPE_FAILURE:
          return {
            ...state,
          };           
                  
        ///////////////////// CLEAR STATE ///////////////////
        case recipesConstants.CLEAR:
          return { ...initialState };                  
        default:
          return state;
    }
  }
  