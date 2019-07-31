export const API_FOR_ALL_ENCODINGS = 'EncodingType';
export const API_FOR_DATETIMEFORMATS = 'DateTimeFormats';
export const API_FOR_TIMEZONES = 'Timezone';
<<<<<<< HEAD
export const API_FOR_REGEX = 'Regex';
export const HOST_NAME = "https://localhost:5001/api/"
=======
export const HOST_NAME = "https://localhost:53007/api/"
>>>>>>> add label with naming rules for input

export const hostInfo = {
  HOST_NAME,
  API_FOR_ALL_TYPES: 'types',
  API_FOR_DATASET_DEPENDING_ON_FIELD_TYPE: 'datasets/ByTypeId/',
  API_FOR_OBJECT_GENERATION: 'DataGenerator/',
  API_FOR_ALL_CONSTRAINTS: 'Constraints',
  API_FOR_CONSTRAINTS_BY_FIELD_TYPE: 'Constraints/fieldtype/',
  API_FOR_CUSTOM_DATASETS: 'customdatasets/withId',
  API_FOR_ALL_ENCODINGS,
  API_FOR_DATETIMEFORMATS,
  API_FOR_TIMEZONES,
  API_FOR_REGEX
}
