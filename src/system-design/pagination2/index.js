import React, { useReducer } from "react";

function Pagination({ totalLength, value, handleChange }) {
  const initialState = {
    page: value,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "first":
        return {
          page: 1,
        };
      case "previous":
        return {
          page: state.page > 1 ? state.page - 1 : state.page,
        };
      case "next":
        return {
          page: state.page < totalLength ? state.page + 1 : state.page,
        };
      case "last":
        return {
          page: totalLength,
        };
      case "change":
        return {
          page:
            action.payload >= 1 && action.payload <= totalLength
              ? Number(action.payload)
              : state.page,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>{state.page}</div>
      <button onClick={() => dispatch({ type: "first" })}>{"<<"}</button>
      <button onClick={() => dispatch({ type: "previous" })}>{"<"}</button>
      <input
        type="number"
        value={state.page}
        onChange={(e) => dispatch({ type: "change", payload: e.target.value })}
      />
      <button onClick={() => dispatch({ type: "next" })}>{">"}</button>
      <button onClick={() => dispatch({ type: "last" })}>{">>"}</button>
    </>
  );
}

export default Pagination;
