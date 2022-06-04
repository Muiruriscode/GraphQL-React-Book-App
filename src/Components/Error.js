import React from "react";

const ErrorComponent = ({ error }) => {
  return (
    <div>
      <p>{error.message}</p>;
    </div>
  );
};

export default ErrorComponent;
