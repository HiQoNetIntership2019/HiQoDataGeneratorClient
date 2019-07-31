import React from 'react';

import GenerationControl from "./GenerationControl.jsx";

import downloadFile from "core/download-file/index";
import sendPrototype from "core/sender-prototypes/index";
import createPrototype from "core/prototype-constructor/index";
import validateField from "core/validators/fieldsValidator";

const action = async data => {
  try {
    if (validateField()){
      const prototypeInfo = createPrototype();
      const result = await sendPrototype(prototypeInfo.obj, prototypeInfo.count);
      downloadFile(result);
    }
  }
  catch{
    alert("Error occured!");
  }
}

export default props => <GenerationControl action={action} />
