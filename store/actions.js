const actions = {
  search: ({ searchValue }) => {
    return (dispatch) => {
      dispatch({ type: 'SEARCHING', searchValue });
    };
  },
  collapse: () => {
    return (dispatch) => {
      dispatch({ type: 'COLLAPSE_HEADER' });
    };
  },
  uncollapse: () => {
    return (dispatch) => {
      dispatch({ type: 'UNCOLLAPSE_HEADER' });
    };
  },
};

export default actions;
