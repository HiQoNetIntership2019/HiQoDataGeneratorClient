export const API_FOR_ALL_ENCODINGS = 'EncodingType';
export const API_FOR_DATETIMEFORMATS = 'DateTimeFormats';
export const API_FOR_TIMEZONES = 'Timezone';
export const API_FOR_REGEX = 'Regex';
export const HOST_NAME = "https://localhost:44383/api/"

export const hostInfo = {
  HOST_NAME,
  API_FOR_USER: HOST_NAME + 'User',
  API_FOR_USER_ACCESS_TOKEN_CHECK: HOST_NAME + 'User/Check/',
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
