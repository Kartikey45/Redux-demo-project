import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyBook } from "../redux/newIndex";

function HookBookContainer() {
  const numberOfBooks = useSelector((state) => state.numberOfBooks);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Hook Container</h2>
      <h2>Number of Books - {numberOfBooks}</h2>
      <button onClick={() => dispatch(buyBook())}>buy book</button>
    </div>
  );
}

export default HookBookContainer;
