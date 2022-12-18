import { SET_SEARCH } from "./controls-action";

const initialState = {
  search: "",
  region: "",
};

export const controlsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SEARCH: {
      return { ...initialState, search: payload };
    }
    default: {
      return initialState;
    }
  }
};
