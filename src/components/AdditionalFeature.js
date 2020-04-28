import React from "react";

import { addFeature } from "../actions/Actions";
import { connect } from "react-redux";

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        onClick={() => props.addFeature(props.feature)}
        className="button"
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// export default AdditionalFeature;

// const mapStateToProps = state => {
//   return {
//     car: state.car,
//   };
// };

export default connect(null, { addFeature })(AdditionalFeature);
