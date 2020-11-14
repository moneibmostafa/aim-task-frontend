import { recipesConstants } from "../constants";
  
  const initialState = {
    recipes: [],
    recipe: {
        title: '',
        creatorName: '',
        description: '',
        servings: 1,
        step: '',
        nutrition: {
            calories: 0,
            protein: 0,
            fat: 0,
            carbohydrates: 0,
            sodium: 0,
        },
        ingredients: [{ingredient: '', type: '', size: ''}],
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
            ingredients.push({ingredient: '', type: '', size: ''});
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

        ///////////////////// UPLOAD FILES ///////////////////
        case recipesConstants.FILE_ADD:
            console.log('kkkkkkkkkkkkkkkkkkk', action.file[0])
          return { ...state, file: action.file };

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

        // case recipesConstants.FILE_REMOVE:
        //   return {
        //     ...state,
        //     files: state.files.filter(f => f !== action.file)
        //   };
          
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
            const recipeData = {
                title: action.recipeData.title,
                creatorName: action.recipeData.creatorName,
                servings: action.recipeData.servings,
                description: action.recipeData.description,
                nutrition: action.recipeData.nutritionFacts,
                ingredients: action.recipeData.ingredients,
                recipeSteps: action.recipeData.recipeSteps,
                _id: action.recipeData._id,
                createdAt: action.recipeData.createdAt,
                views: action.recipeData.views,
                // images,            
            };
            console.log('kkkkkkkkkkkkkkkkkkkk', recipeData)
          return { ...state, recipe: recipeData };  
        case recipesConstants.GET_RECIPE_DATA_FAILURE:
          return { ...state };          

        // //////////////////////// REPLY //////////////////////
        // case reportProblemConstants.REPLY_TO_TICKET_REQUEST:
        //   return {
        //     ...state,
        //   };             
        // case reportProblemConstants.REPLY_TO_TICKET_SUCCESS:
        //   return {
        //     ...state,
        //     ticketData: action.ticketData,
        //   };  
        // case reportProblemConstants.REPLY_TO_TICKET_FAILURE:
        //   return {
        //     ...state,
        //   };           
                  
        ///////////////////// CLEAR STATE ///////////////////
        case recipesConstants.CLEAR:
          return { ...initialState };                  
        default:
          return state;
    }
  }
  