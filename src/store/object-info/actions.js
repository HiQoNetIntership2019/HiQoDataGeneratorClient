export const CHANGE_OBJECT_NAME = "CHANGE_OBJECT_NAME";
export const CHANGE_OBJECTS_COUNT = "CHANGE_OBJECTS_COUNT";

export const changeObjectName = objectName => ({
  type: CHANGE_OBJECT_NAME,
  payload: objectName
});

export const changeObjectsCount = objectsCount => ({
  type: CHANGE_OBJECTS_COUNT,
  payload: objectsCount
});
