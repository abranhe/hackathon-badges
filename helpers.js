const githubIssueUrl = require('new-github-issue-url');


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

const buildGithubIssue = githubIssueUrl({
  title: 'New Hackathon request!!!',
  user: 'abranhe',
  repo: 'hackathon-badges',
  body: `**Required***
  
_name_: <!-- Fill in here -->
_website_: <!-- Fill in here -->

**Not required**

Official logo picture url: <!-- Fill Here -->
`,
});

module.exports = {
  makeBadge,
  buildHtml,
  buildMarkdown,
  buildGithubIssue,
};
