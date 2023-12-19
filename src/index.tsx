import React from "react";

const css = `.loading {
  display: inline-flex;
  align-items: center;
}

.loading .spacer {
  margin-right: 2px;
}

.loading span {
  animation-name: blink;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  display: inline-block;
  margin: 0 1px;
}

.loading span:nth-of-type(2) {
  animation-delay: 0.2s;
}

.loading span:nth-of-type(3) {
  animation-delay: 0.4s;
}

@keyframes blink {
  0% {
    opacity: 0.2;
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
}`;

export const Loading = () => (
  <>
    <style>{css}</style>
    <span className="loading">
      <span style={{ backgroundColor: "#333333" }} />
      <span style={{ backgroundColor: "#333333" }} />
      <span style={{ backgroundColor: "#333333" }} />
    </span>
  </>
);
