import { validateInput, dismissInputValidation } from 'core/validators/inputValidator';
import { Regexes } from 'constants/Regexes';

export default function validateConstraints(constraints, fieldId){
    if (constraints === undefined){
        return false;
    }

    let currentConstraints = Array.from(constraints.keys())
        .map(key => constraints.get(key))
        .map(item => {
            return {
                value: item.value,
                id : item.id,
                isIncluded : item.isIncluded
            }
        });

    let result = true;
    currentConstraints.forEach((constraint) => {
        if (constraint.isIncluded){
            var validationResult = validateInput(
                constraint.value, 
                Regexes.FIELD_NAME,
                "input-constraint-"+fieldId+"-"+constraint.id,
                "input-constraint-span-"+fieldId+"-"+constraint.id
            );
            result = result && validationResult;
        }else{
            dismissInputValidation("input-constraint-"+fieldId+"-"+constraint.id, "input-constraint-span-"+fieldId+"-"+constraint.id);
        }
    },this);
    
    return result;
}
