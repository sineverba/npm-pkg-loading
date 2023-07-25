import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

interface Options {
  // Size is optional
  size?: SizeProp;
}

export const Loading = ({ size = "2xl" }: Options) => (
  <div
    style={{
      backgroundColor: "#FFFFFF",
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    }}
  >
    <FontAwesomeIcon icon={faSpinner} spin size={size} />
  </div>
);
