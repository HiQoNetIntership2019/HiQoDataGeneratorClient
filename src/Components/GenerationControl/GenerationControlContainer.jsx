import React from 'react';

import GenerationControl from "./GenerationControl.jsx";

import downloadFile from "core/download-file/index";
import sendPrototype from "core/sender-prototypes/index";
import createPrototype from "core/prototype-constructor/index";

const action = async data => {
  const prototype = createPrototype();
  const result = await sendPrototype(prototype);
  downloadFile(result);
}

export default props => <GenerationControl action={action} />
