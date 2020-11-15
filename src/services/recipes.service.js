import { httpService } from "./";
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
  return httpService.post(apiEndpoint, recipeObject, {
    headers: {'Content-Type': 'multipart/form-data'},
  });
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

function updateRecipe(recipeObject, recipeId) {
  return httpService.put(`${apiEndpoint}/${recipeId}`, recipeObject, {
    headers: {'Content-Type': 'multipart/form-data'},
  });
}