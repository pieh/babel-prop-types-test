import React from "react";
import PropTypes from "prop-types";

const OkComponent = ({ foo }) => {
  return <div>{foo}</div>;
};

OkComponent.propTypes = {
  foo: PropTypes.string,
};

export default OkComponent;
