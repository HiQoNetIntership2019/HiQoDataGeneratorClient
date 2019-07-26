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

export default async () => {
  const state = store.getState();

  let {
    objectInfo: {name, count},
    hostInfo: {HOST_NAME, API_FOR_OBJECT_GENERATION}
  } = state;

  let extension = state.fileFormats.name;
  let objectForGeneration = {
    name,
    fields: []
  }

  return await sendGenerationRequest(objectForGeneration,
    HOST_NAME + API_FOR_OBJECT_GENERATION + extension, extension);
}
