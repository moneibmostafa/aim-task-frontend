import { recipesConstants } from '../constants';
import { recipesService } from '../services';
// import {alertActions} from './alert.actions';
// import {history} from "../helpers";

export const recipesActions = {
    setStep,
    addNewIngredientEmptyField,
    handleChangeFields,
    filesAdded,
    fileRemoved,
    submitRecipe,
    getAllRecipes,
    getRecipeData,
    // getTicketCategories,
    // createProblemTicket,
    // getMyTickets,
    // getTicketData,
    // submitReply,
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

  function filesAdded(file) {
      console.log('ffffffffffffffffffffffffffffff', file)
    return (dispatch) => {
      dispatch({type: recipesConstants.FILE_ADD, file});
    };
  }
  
  function fileRemoved(file) {
    return (dispatch) => {
      dispatch({type: recipesConstants.FILE_REMOVE, file});
    };
  }  

  function submitRecipe(recipeObject) {
    return async (dispatch) => {
      dispatch(request(recipeObject));
      try {
        const {data} = await recipesService.createRecipe(recipeObject);
        dispatch(clear());
        dispatch(success(data));
        // dispatch(
        //   alertActions.success({header: 'Recipe submitted successfully'}),
        // );
        // history.push(`ticket/${data._id}`);
      } catch (ex) {
        dispatch(failure(ex));
        // dispatch(alertActions.error({header: ex.message}));
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
        return {type: recipesConstants.GET_RECIPE_DATA_FAILURE, error};
      }
  }

//   function submitReply(text, ticketId) {
//     return async (dispatch) => {
//         await dispatch(request());
//         try {
//           const {data} = await reportProblemService.replyToTicket(text, ticketId);
//           dispatch(success(data));
//         } catch (ex) {
//           dispatch(failure(ex.message));
//         }
//       };
    
//       function request() {
//         return {type: reportProblemConstants.REPLY_TO_TICKET_REQUEST};
//       }
    
//       function success(ticketData) {
//         return {type: reportProblemConstants.REPLY_TO_TICKET_SUCCESS, ticketData};
//       }
    
//       function failure(error) {
//         return {type: reportProblemConstants.REPLY_TO_TICKET_FAILURE, error};
//       }
//  }