import React, { useReducer } from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

import { AppReducer, InitialState } from "./reducers/AppReducer";
import { connect } from "react-redux";

const App = props => {
  const [state, dispatch] = useReducer(InitialState);

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} />
        <Total car={state.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice,
    car: state.car,
  };
};

export default connect(mapStateToProps, {})(App);
