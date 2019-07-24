export const ADD_DATASET_VALUE = "ADD_DATASET_VALUE";
export const RESET_DATASET = "RESET_DATASET";
export const REMOVE_DATASET_VALUE = "REMOVE_DATASET_VALUE";
export const CHANGE_DATASET_NAME = "CHANGE_DATASET_NAME";
export const CHANGE_DATASET_VALUE = "CHANGE_DATASET_VALUE";

export const addDatasetValue = (value="") => ({
    type: ADD_DATASET_VALUE,
    payload: {value}
});

export const removeDatasetValue = (valueIndex) => ({
    type: REMOVE_DATASET_VALUE,
    payload: {valueIndex}
});

export const changeDatasetValue = (valueIndex, value) => ({
    type: CHANGE_DATASET_VALUE,
    payload: {valueIndex, value}
});

export const changeDatasetName = (name) => ({
    type: CHANGE_DATASET_NAME,
    payload: {name}
});

export const resetDataset = () => ({
    type: RESET_DATASET,
    payload: {}
});