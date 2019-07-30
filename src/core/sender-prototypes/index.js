import store from 'store/index';
import axios from 'axios';

const createRequestData = (data, url) => {
  return {
    method: "post",
    responseType: "blob",
    url,
    data,
  }
}

const sendGenerationRequest = async (object, url, extension) => {
  try {
    const response = await axios(createRequestData(object, url));
    return {
      data: response.data,
      name: object.name,
      extension
    }
  }
  catch (error) {
    console.log(Object.keys(error), error.Message);
  }
};

export default async (prototype, count) => {
  const storeState = store.getState();

  const {HOST_NAME, API_FOR_OBJECT_GENERATION } = storeState.hostInfo;
  const extension = storeState.fileFormats.name;
  const urlForAPI = HOST_NAME + API_FOR_OBJECT_GENERATION + extension + '/' + count;
  return await sendGenerationRequest(prototype, urlForAPI, extension);
};
