import React from "react";

import { ADD_FEATURE } from "../actions/Actions";

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={ADD_FEATURE} className="button">
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
