import badges from '../badges';

// Feature Miami Hackathons
const filterByMiami = () => {
  return badges.filter((hackathon) => hackathon.location.includes('Miami'));
};

export default {
  search: {
    value: '',
    hackathons: [],
  },
  collapsed: false,
  badges,
  featuredHackathons: filterByMiami(),
};
