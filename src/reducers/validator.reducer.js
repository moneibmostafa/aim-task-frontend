import {validatorConstants} from '../constants';

const initialState = {valid: false , errors: {}};

export function validation(state = initialState, action) {
  switch (action.type) {
    case validatorConstants.INPUT_VALIDATE_SUCCESS:
      const errors = {...state.errors};
      delete errors[action.input];
      return {...state, errors};
    case validatorConstants.INPUT_VALIDATE_FAILURE:
      return {...state, errors: Object.assign(action.errors, state.errors)};
    default:
      return state
  }
}
