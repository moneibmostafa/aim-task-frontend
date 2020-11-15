import { combineReducers } from 'redux';

import { recipes } from './recipes.reducer';


const appReducer = combineReducers({
    recipes,
});

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer;
