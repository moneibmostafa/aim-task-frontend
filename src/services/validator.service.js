const Ajv = require("ajv");
const ajv = new Ajv({format: 'full', allErrors: true, jsonPointers: true});
const pointer = require('json-pointer');

export const validatorService = {
  validateInput,
  buildHumanErrors,
};

function validateInput(schema, name, value) {
  const obj = {[name]: value};
  const inputSchema = {"properties": {}};
  inputSchema.properties[name] = pointer.get(schema, '/properties/' + name);
  const validate = ajv.compile(inputSchema);
  const valid = validate(obj);
  return valid ? null : validate.errors;
}

function buildHumanErrors(schema, errorsObj) {
  const errors = {};
  for (let error of errorsObj) {
    const input = error.dataPath.replace('/', '');
    const property = pointer.get(schema, '/properties' + error.dataPath);
    if (error.params.missingProperty) {
      errors[input] = property.title + ' is a required field';
    } else if (error.keyword === 'format' && property.example) {
      errors[input] = property.title + ' is in an invalid format, e.g: ' + property.example;
    } else {
      errors[input] = property.title + ' ' + error.message;
    }
  }
  return errors;
}
