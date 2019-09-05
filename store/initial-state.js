import badges from '../badges';

const filterByMiami = () => {
  return badges.filter((hackathon) => hackathon.location.includes('Miami'));
};

export default {
  search: {
    value: '',
    hackathons: [ ...badges ],
    heading: 'Popular hackathons',
  },
  collapsed: false,
  featuredHackathons: filterByMiami(),
};
