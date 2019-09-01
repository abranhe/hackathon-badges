const makeBadge = (options) => {
  options = {
    name: 'Hackathon',
    year: new Date().getFullYear().toString(),
    color: '#555',
    template: 'flat',
    ...options,
  };

  return {
    text: [ options.name, options.year ],
    color: options.color,
    colorA: options.colorA,
    colorB: options.colorB,
    template: options.template,
    logo: options.logo,
    links: [ options.link, options.link ],
  };
};

const buildHtml = ({ link, path, name }) =>
  `<a href="${link}">
  <img src="https://hackathon.badge.pw/${path}" alt="${name}">
</a>`;

const buildMarkdown = ({ link, path, name }) =>
  `[![${name}](https://hackathon.badge.pw/${path})](${link})`;

module.exports = {
  makeBadge,
  buildHtml,
  buildMarkdown,
};
