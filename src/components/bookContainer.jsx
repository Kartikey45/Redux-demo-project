import React, {useState} from "react";
import { connect } from "react-redux";
import { buyBook } from "../redux/newIndex";

const mapStateProps = (state) => {
  return {
    numberOfBooks: state.numberOfBooks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyBook: function (number) {
      dispatch(buyBook(number));
    },
  };
};

function BookContainer(props) {
  const [number, setNumber] = useState(1)
  return (
    <div>
      <h1>Book Container</h1>
      <h1>Quantity of Books - {props.numberOfBooks} </h1>
      <input type="text" value={number} onChange={e=> setNumber(e.target.value) } />
      <button onClick={()=>props.buyBook(number)}>buy {number} book</button>
    </div>
  );
}

export default connect(mapStateProps, mapDispatchToProps)(BookContainer);
