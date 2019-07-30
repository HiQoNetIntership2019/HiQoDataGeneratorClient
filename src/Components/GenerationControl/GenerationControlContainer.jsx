import React from 'react';

import GenerationControl from "./GenerationControl.jsx";

import downloadFile from "core/download-file/index";
import sendPrototype from "core/sender-prototypes/index";
import createPrototype from "core/prototype-constructor/index";

const action = async data => {
  try {
    const prototypeInfo = createPrototype();
    const result = await sendPrototype(prototypeInfo.obj, prototypeInfo.count);
    downloadFile(result);
  }
  catch{
    alert("Error occured!");
  }
}

export default props => <GenerationControl action={action} />
