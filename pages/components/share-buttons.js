function renderTwitter() {
  return (
    <a
      className="social-action social-action_twitter"
      target="_blank"
      href="https://twitter.com/intent/twee"
      onClick={function(e) {
        e.stopPropagation();
      }}
    >
      <span>tweet</span>
    </a>
  );
}

function renderFacebook() {
  return (
    <a
      className="social-action social-action_facebook"
      target="_blank"
      href={
        'https://www.facebook.com/sharer/sharer.php?u=' +
        encodeURIComponent(process.env.npm_package_homepage)
      }
      onClick={function(e) {
        e.stopPropagation();
      }}
    >
      <span>share</span>
    </a>
  );
}

function renderGithub() {
  return (
    <a
      className="social-action social-action_github"
      target="_blank"
      href="https://github.com/kogg/instant-logos/stargazers"
      onClick={function(e) {
        e.stopPropagation();
        ga(
          'send',
          'social',
          'GitHub',
          'Star',
          'https://github.com/kogg/instant-logos/stargazers'
        );
      }}
    >
      <span>star</span>
    </a>
  );
}

export default function({ twitter = true, facebook = true, github = true }) {
  return (
    <div className="ShareButtons">
      {twitter ? renderTwitter() : null}
      {facebook ? renderFacebook() : null}
      {github ? renderGithub() : null}
    </div>
  );
}
