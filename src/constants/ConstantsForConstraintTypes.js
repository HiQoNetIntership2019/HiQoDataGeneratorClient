import { HOST_NAME, API_FOR_ALL_ENCODINGS, API_FOR_DATETIMEFORMATS, API_FOR_TIMEZONES, API_FOR_REGEX } from './ConstantsForAPI';

export const inputTypes = new Map([
    ['min value', 'number'],
    ['max value', 'number'],
    ['max length', 'number'],
    ['min length', 'number'],
    ['format', 'select'],
    ['end date', 'date'],
    ['start date', 'date'],
    ['encoding', 'select'],
    ['time', 'time'],
    ['regex', 'select'],
    ['separator', 'text'],
    ['min a value', 'number'],
    ['max a value', 'number'],
    ['min b value', 'number'],
    ['max b value', 'number'],
    ['timezone', 'select'],
    ['decimal place', 'number'],
    ['max digits', 'number']
]);

export const apiForConstraints = new Map([
    ['encoding', HOST_NAME + API_FOR_ALL_ENCODINGS],
    ['format', HOST_NAME + API_FOR_DATETIMEFORMATS],
    ['timezone', HOST_NAME + API_FOR_TIMEZONES],
    ['regex', HOST_NAME + API_FOR_REGEX]
]);
