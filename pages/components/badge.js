export default ({ path, template = 'flat-square' }) => (
  <img src={`/${path}?template=${template}`} />
);
