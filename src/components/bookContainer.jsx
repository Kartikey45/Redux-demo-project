import React from "react";
import { connect } from "react-redux";
import { buyBook } from "../redux/newIndex";

const mapStateProps = (state) => {
  return {
    numberOfBooks: state.numberOfBooks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyBook: function () {
      dispatch(buyBook());
    },
  };
};

function bookContainer(props) {
  return (
    <div>
      <h1>Quantity of Books - {props.numberOfBooks} </h1>
      <button onClick={props.buyBook}>buy book</button>
    </div>
  );
}

export default connect(mapStateProps, mapDispatchToProps)(bookContainer);
