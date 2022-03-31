function logger(reducer) {
  // params prevState, action o ham nay do useReducer tra ve
  return (prevState, action) => {
    console.group(action.type);
    console.log(
      "%c Prev state: ",
      "background: #e6faff; color: #04a1c4; font-weight: bold",
      prevState
    );
    console.log(
      "%c Action: ",
      "background: #820000; color: #fff; font-weight: bold",
      action
    );
    const newState = reducer(prevState, action);
    console.log(
      "%c Next state: ",
      "background: #e6ffe7; color: #005406; font-weight: bold",
      newState
    );
    console.groupEnd();

    return newState;
  };
}

export default logger;
