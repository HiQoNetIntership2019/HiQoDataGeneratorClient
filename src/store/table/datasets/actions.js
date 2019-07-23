export const CHANGE_DATASET = "CHANGE_DATASET";

export const setDataset = (dataset, fieldId) => ({
  type: CHANGE_DATASET,
  payload: {dataset, fieldId}
});
