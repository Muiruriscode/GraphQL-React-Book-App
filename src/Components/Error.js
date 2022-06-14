import React from "react";

const ErrorComponent = ({ error }) => {
  return <div>{console.log(error.message)}</div>;
};

export default ErrorComponent;
