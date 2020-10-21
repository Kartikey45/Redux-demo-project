import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import BookContainer from "./components/bookContainer";
import store from "./redux/store";

function App() {
  return (
    <Provider  store={store}>
      <div className="App">
        <BookContainer />
      </div>
    </Provider>
  );
}

export default App;
