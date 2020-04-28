import React from "react";

import { REMOVE_FEATURE } from "../actions/Actions";

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={REMOVE_FEATURE} className="button">
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
