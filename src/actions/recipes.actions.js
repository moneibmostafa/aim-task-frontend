import { recipesConstants } from '../constants';
import { recipesService } from '../services';
import { history } from "../history";

export const recipesActions = {
    setStep,
    addNewIngredientEmptyField,
    handleChangeFields,
    submitRecipe,
    getAllRecipes,
    getRecipeData,
    deleteRecipe,
    updateRecipe,
};

  function setStep(step) {
    return (dispatch) => {
      dispatch({type: recipesConstants.CHANGE_STEP, step});
    };
  }

  function addNewIngredientEmptyField() {
    return (dispatch) => {
      dispatch({type: recipesConstants.ADD_EMPTY_FIELD});
    };
  }

  function handleChangeFields(name, value, index) {
    return (dispatch) => {
      dispatch({type: recipesConstants.CHANGE_FIELDS, name, value, index });
    };
  }  

  function submitRecipe(recipeObject) {
    return async (dispatch) => {
      dispatch(request(recipeObject));
      try {
        const {data} = await recipesService.createRecipe(recipeObject);
        dispatch(clear());
        dispatch(success(data));
        history.push('/');
      } catch (ex) {
        dispatch(failure(ex));
      }
    };
  
    function request() {
      return {type: recipesConstants.CREATE_RECIPE_REQUEST};
    }
  
    function success(recipe) {
      return {type: recipesConstants.CREATE_RECIPE_SUCCESS, recipe};
    }
  
    function failure(errors) {
      console.log(errors);
      return {type: recipesConstants.CREATE_RECIPE_FAILURE, errors};
    }
  
    function clear() {
      return {type: recipesConstants.CLEAR};
    }
  }

  function updateRecipe(recipeObject, recipeId) {
    return async (dispatch) => {
      dispatch(request(recipeObject));
      try {
        const {data} = await recipesService.updateRecipe(recipeObject, recipeId);
        dispatch(clear());
        dispatch(success());
        history.push(`/${recipeId}`);
      } catch (ex) {
        dispatch(failure(ex));
      }
    };
  
    function request() {
      return {type: recipesConstants.UPDATE_RECIPE_REQUEST};
    }
  
    function success() {
      return {type: recipesConstants.UPDATE_RECIPE_SUCCESS};
    }
  
    function failure(errors) {
      console.log(errors);
      return {type: recipesConstants.UPDATE_RECIPE_FAILURE, errors};
    }
  
    function clear() {
      return {type: recipesConstants.CLEAR};
    }
  }

  function getAllRecipes() {
    return async (dispatch) => {
        dispatch(request());
        try {
          const {data} = await recipesService.getAllRecipes();
          dispatch(success(data.recipes));
        } catch (ex) {
          dispatch(failure(ex.message));
        }
      };
    
      function request() {
        return {type: recipesConstants.GET_RECIPES_REQUEST};
      }
    
      function success(recipes) {
        return {type: recipesConstants.GET_RECIPES_SUCCESS, recipes};
      }
    
      function failure(error) {
        console.log(error);
        return {type: recipesConstants.GET_RECIPES_FAILURE, error};
      }
  }

  function getRecipeData(recipeId) {
    return async (dispatch) => {
        dispatch(request());
        try {
          const {data} = await recipesService.getRecipeData(recipeId);
          dispatch(success(data.recipe));
        } catch (ex) {
          dispatch(failure(ex.message));
        }
      };
    
      function request() {
        return {type: recipesConstants.GET_RECIPE_DATA_REQUEST};
      }
    
      function success(recipeData) {
        return {type: recipesConstants.GET_RECIPE_DATA_SUCCESS, recipeData};
      }
    
      function failure(error) {
        console.log(error);
        return {type: recipesConstants.GET_RECIPE_DATA_FAILURE, error};
      }
  }

  function deleteRecipe(recipeId) {
    return async (dispatch) => {
        await dispatch(request());
        try {
          const {data} = await recipesService.deleteRecipe(recipeId);
          dispatch(success(data.recipes));
          history.push('/');
        } catch (ex) {
          dispatch(failure(ex.message));
        }
      };
    
      function request() {
        return {type: recipesConstants.DELETE_RECIPE_REQUEST};
      }
    
      function success(recipes) {
        return {type: recipesConstants.DELETE_RECIPE_SUCCESS, recipes};
      }
    
      function failure(error) {
        console.log(error);
        return {type: recipesConstants.DELETE_RECIPE_FAILURE, error};
      }
 }