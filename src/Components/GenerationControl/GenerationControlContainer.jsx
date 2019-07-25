import React from 'react';

import GenerationControl from "./GenerationControl.jsx";

import downloadFile from "core/download-file/index";
import objectGenerate from "core/object-generation/index";

const action = async data => downloadFile(await objectGenerate());

export default props => <GenerationControl action={action} />
