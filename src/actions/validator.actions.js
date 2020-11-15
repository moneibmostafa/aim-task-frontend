import {validatorConstants} from '../constants';
import {validatorService} from '../services';

export const validatorActions = {
  validateInput,
};

function validateInput(schema, name, value) {
  return dispatch => {
    const errors = validatorService.validateInput(schema, name, value);
    if (errors) {
      const humanErrors = validatorService.buildHumanErrors(schema, errors);
      dispatch(failure(humanErrors));
    } else {
      dispatch(success(name));
    }
  };

  function success(input) {
    return {type: validatorConstants.INPUT_VALIDATE_SUCCESS, input}
  }

  function failure(errors) {
    return {type: validatorConstants.INPUT_VALIDATE_FAILURE, errors}
  }
}
