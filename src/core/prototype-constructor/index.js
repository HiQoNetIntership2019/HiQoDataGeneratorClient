import store from 'store/index';

export default () => {
  const state = store.getState();
  const {
    objectInfo: { name, count},
    fieldTypes: {currentFieldTypes},
    datasets: { currentDatasets }
  } = state;
  const fields = state.fields.fieldsData;
  const constraints = state.constraints.constraints;


  const fieldPrototypes = Array.from(fields.keys()).map(flKey => {
    let fieldInfo = fields.get(flKey);
    let constraintsInfo = constraints.get(flKey);
    let dataset = currentDatasets.get(flKey);

    let currentConstraints = Array.from(constraintsInfo.keys())
      .map(key => constraintsInfo.get(key))
      .filter(item => item.isIncluded)
      .map(item => {
        return {
        value: item.value,
        constraintType: {
            id: item.id,
            name: item.name,
            description: item.description
          },
        }
      });

    return {
      name: fieldInfo.name,
      isRequired: fieldInfo.isNotNull,
      constraints: currentConstraints,
      fieldType: currentFieldTypes.get(flKey),
      datasetId: dataset && dataset.id != 0 ? dataset.id : null
    };
  });

  return {
    obj: {
      name,
      fields: fieldPrototypes
    },
    count
  }
}
