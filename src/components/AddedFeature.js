import React from "react";

import { removeFeature } from "../actions/Actions";
import { connect } from "react-redux";

const AddedFeature = props => {
  console.log("addFeature: ", props);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        onClick={() => props.removeFeature(props.feature)}
        className="button"
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

// const mapStateToProps = state => {
//   return { car: state.car };
// };

export default connect(null, { removeFeature })(AddedFeature);
