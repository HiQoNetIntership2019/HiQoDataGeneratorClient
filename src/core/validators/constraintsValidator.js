import validateInput from 'core/validators/inputValidator';
import { Regexes } from 'constants/Regexes';

export default function validateConstraints(constraints, fieldId){
    console.log("1)");
    console.log(constraints);
    if (constraints === undefined){
        return false;
    }

    let currentConstraints = Array.from(constraints.keys())
        .map(key => constraints.get(key))
        .filter(item => item.isIncluded)
        .map(item => {
            return {
                value: item.value,
                id : item.id
            }
        });
    
    console.log("2)");
    console.log(currentConstraints);
    console.log("3)");
    
    
    let result = true;
    currentConstraints.forEach((constraint) => {
        console.log("input-constraint-"+fieldId+"-"+constraint.id);
        console.log("input-constraint-span-"+fieldId+"-"+constraint.id);
        var validationResult = validateInput(
            constraint.value, 
            Regexes.FIELD_NAME,
            "input-constraint-"+fieldId+"-"+constraint.id,
            "input-constraint-span-"+fieldId+"-"+constraint.id
        );
        console.log(validationResult);
        result = result && validationResult;
    },this);
    
    return result;
}
