import types from './types';
import initialState from '../store/initial-state';
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

    case types.SET_HEADING:
      return {
        ...state,
        search: {
          ...state.search,
          heading: action.heading,
        },
      };

    case types.CLEAR_SEARCH:
      return initialState;

    default:
      return state;
  }
}

export default reducers;
