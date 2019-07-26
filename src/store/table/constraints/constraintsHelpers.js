export default function changeConstraints(constraints, changedConstraint){
    const changedId = changedConstraint.id;
    constraints = changedConstraint.name == "regex" 
      ? excludeRegex(constraints, changedId)
      : includeRegex(constraints);
    constraints.set(changedId, changedConstraint);
    return constraints;
}
  
function excludeRegex(constraints, changedId){
    for (let entry of constraints){
      const key = entry[0];
      let value = entry[1];
      if (key == changedId){
        continue;
      }
      value.isIncluded = false;
      constraints.set(key, value);
    }
    return constraints;
}
  
function includeRegex(constraints){
    for (let entry of constraints){
      const key = entry[0];
      let value = entry[1];
      if (value.name == "regex"){
        value.isIncluded = false;
        constraints.set(key, value);
        break;
      }
    }
    return constraints;
}
