function renderTwitter() {
  return (
    <a
      className="social-action social-action_twitter"
      target="_blank"
      // TODO add intent builder
      href={`https://twitter.com/intent/tweet?url=https%3A%2F%2Fhackathon.badge.pw&via=abranhe&text=If%20you%20are%20in%20a%20hackathon%20you%20need%20to%20check&hashtags=hackathonbadge`}
      onClick={function(e) {
        e.stopPropagation();
      }}>
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
      }}>
      <span>share</span>
    </a>
  );
}

function renderGithub() {
  return (
    <a
      className="social-action social-action_github"
      target="_blank"
      href="https://github.com/abranhe/hackathon-badges"
      onClick={function(e) {
        e.stopPropagation();
      }}>
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
