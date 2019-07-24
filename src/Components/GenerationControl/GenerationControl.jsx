import React from "react";

import FileFormats from "../FileFormats/FileFormats.jsx";

import "./style.css";

export default props => {
  return (
    <div className="control d-flex flex-column justify-content-end">
      <h4>File types</h4>
      <FileFormats />
      <button type="button"
        onClick={data => props.action(data)}
        className="btn btn-primary">
        Generate object
      </button>
    </div>
  );
}
