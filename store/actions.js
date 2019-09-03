import types from './types';
import allHackathons from '../badges';

const actions = {
  search: ({ searchValue = '' }) => {
    return (dispatch) => {
      const hackathonsByName = allHackathons.filter((hackathon) => {
        return hackathon.name.toLowerCase().includes(searchValue.toLowerCase());
      });

      const hackathonsByLocation = allHackathons.filter((hackathon) =>
        hackathon.location.toLowerCase().includes(searchValue.toLowerCase()),
      );

      const mixedHackathons = [ ...hackathonsByName, ...hackathonsByLocation ];
      const hackathons = Array.from(
        mixedHackathons.reduce((m, t) => m.set(t.name, t), new Map()).values(),
      );

      dispatch({
        type: types.SEARCHING,
        searchValue,
        hackathons,
      });
    };
  },
  collapse: () => {
    return (dispatch) => {
      dispatch({ type: types.COLLAPSE_HEADER });
    };
  },
  uncollapse: () => {
    return (dispatch) => {
      dispatch({ type: types.UNCOLLAPSE_HEADER });
    };
  },
  setHeading: ({ heading }) => {
    return (dispatch) => {
      dispatch({ type: types.SET_HEADING, heading });
    };
  },
  clearSearch: () => {
    return (dispatch) => {
      dispatch({ type: types.CLEAR_SEARCH });
    };
  },
};

export default actions;
