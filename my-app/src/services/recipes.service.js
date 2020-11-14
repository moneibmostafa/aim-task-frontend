import { httpService } from "./";
// import { apiUrl } from "../config";
export const backendUrl = process.env.REACT_APP_BACKEND_URL;
export const apiUrl = backendUrl + "/api";

export const recipesService = {
    createRecipe,
    getAllRecipes,
    getRecipeData,
    // replyToTicket,
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

// function replyToTicket(text, ticketId) {
//   return httpService.put(`${apiEndpoint}/reply/${ticketId}`, { text });
// }