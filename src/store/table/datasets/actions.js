export const CHANGE_DATASET = "CHANGE_DATASET";
export const REMOVE_DATASET = "REMOVE_DATASET"

export const setDataset = (dataset, fieldId) => ({
  type: CHANGE_DATASET,
  payload: {dataset, fieldId}
});

export const removeDataset = (dataset, fieldId) => ({
  type: REMOVE_DATASET,
  payload: {dataset, fieldId}
});
