import types from './types';

function reducers(state = initialState, action) {
  switch (action.type) {
    case types.SEARCHING:
      return {
        ...state,
        search: {
          ...state.search,
          value: action.searchValue,
          heading: 'Search results',
          hackathons: action.hackathons,
        },
      };

    case types.COLLAPSE_HEADER:
      return { ...state, collapsed: true };

    case types.UNCOLLAPSE_HEADER:
      return { ...state, collapsed: false };

    default:
      return state;
  }
}

export default reducers;
