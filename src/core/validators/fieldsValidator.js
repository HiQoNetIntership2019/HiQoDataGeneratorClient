import store from 'store/index';
import validateInput from 'core/validators/inputValidator';
import validateFieldType from 'core/validators/fieldTypeValidator';
import validateConstraints from 'core/validators/constraintsValidator';
import { Regexes } from 'constants/Regexes';

export default function validateFields(){
  const state = store.getState();
  const {
    fieldTypes: { currentFieldTypes }
  } = state;
  const fields = state.fields.fieldsData;
  const constraints = state.constraints.constraints;

  let result = true;
  fields.forEach((data, key) => {
    var fieldNameValidationResult = validateInput(data.name, Regexes.FIELD_NAME,"field-name-"+key,"field-name-span-"+key)
    var fieldTypeValidationResult = validateFieldType(currentFieldTypes.get(key),"field-type-"+key,"field-type-span-"+key);
    var constraintsValidationResult = validateConstraints(constraints.get(key), key);

    result = result && fieldNameValidationResult && fieldTypeValidationResult && constraintsValidationResult;
  },this);

  return result;
}
