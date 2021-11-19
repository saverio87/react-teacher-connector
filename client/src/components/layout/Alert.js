import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <div
      key={alert.id}
      className={`alert alert-${alert.alertType} slide-in-right`}
    >
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
  // state.alert is an array of objects with {id: .., type: ..., msg: ..}
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
  // This gets the state from the redux store and grabs the 'alert' reducer.
});

export default connect(mapStateToProps)(Alert);
