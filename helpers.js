const MakeBadge = ({
  name = 'Hackathon',
  year = new Date().getFullYear().toString(),
  color = '#555',
  colorA,
  colorB,
  template = 'flat',
  logo,
  link,
}) => {
  return {
    text: [ name, year ],
    color,
    colorA,
    colorB,
    template,
    logo,
    links: [ link, link ],
  };
};

module.exports = {
  MakeBadge,
};
