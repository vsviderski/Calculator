import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./reducer/rootReducer";

export const renderWithRedux = (
    component,
    { initialState, store = createStore(rootReducer, initialState) } = {}
  ) => {
    return {
      ...render(<Provider store={store}>{component}</Provider>),
      store,
    };
  };