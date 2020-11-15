import { combineReducers } from 'redux';

import { recipes } from './recipes.reducer';
import { validation } from './validator.reducer';

const appReducer = combineReducers({
    recipes,
    validation,
});

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer;
