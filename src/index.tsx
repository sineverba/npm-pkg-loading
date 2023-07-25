import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export const Loading = () => (
  <div
    style={{
      backgroundColor: "#FFFFFF",
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    }}
  >
    <FontAwesomeIcon icon={faSpinner} spin />
  </div>
);