import { httpService } from "./";
// import { apiUrl } from "../config";
export const backendUrl = process.env.REACT_APP_BACKEND_URL;
export const apiUrl = backendUrl + "/api";

export const recipesService = {
    createRecipe,
    getAllRecipes,
    getRecipeData,
    deleteRecipe,
    updateRecipe,
};

const apiEndpoint = apiUrl + "/recipes";

function createRecipe(recipeObject) {
    console.log('pppppppppppppppppppppppppppppppp', recipeObject);
//   return httpService.post(`${apiEndpoint}/`, { recipeObject }, {
//     headers: {'Content-Type': 'multipart/form-data'},
//   });
  return httpService.post(`${apiEndpoint}/`, recipeObject);
}

function getAllRecipes() {
  return httpService.get(`${apiEndpoint}/`);
}

function getRecipeData(recipeId) {
  return httpService.get(`${apiEndpoint}/${recipeId}`);
}

function deleteRecipe(recipeId) {
  return httpService.delete(`${apiEndpoint}/${recipeId}`);
}

function updateRecipe(recipeObject) {
  return httpService.put(`${apiEndpoint}/${recipeObject._id}`, recipeObject);
}