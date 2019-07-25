import React from "react";

import FileFormats from "Components/FileFormats/FileFormats.jsx";

import "./style.css";

export default props => {
  return (
    <div className="control container text-center">
      <h3 className="mt-2 mb-2">File type</h3>
      <FileFormats />
      <button type="button"
        onClick={async data => await props.action(data)}
        className="btn btn-primary">
        Generate object
      </button>
    </div>
  );
}
