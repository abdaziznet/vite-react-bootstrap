import React from "react";
import { Spinner } from "react-bootstrap";

function SpinnerWithLabel({ label }) {
  return (
    <div className="text-center">
      <Spinner
        animation="border"
        role="status"
        id="spinnerInfo"
        variant="success"
        size="sm"
        className="spinnner__info"
      />
      <span id="msgInfo">{label}</span>
    </div>
  );
}

export default SpinnerWithLabel;
