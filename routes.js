const { Router }         = require('express');
const { makeBadge }      = require('./helpers');
const { BadgeFactory }   = require('gh-badges');
const badges             = require('./badges');

const router = Router();
const badgeFactory = new BadgeFactory();

router.get('/api/hackathons', (req, res) => res.json(badges));

badges.forEach((badge) => {
  router.get(`/${badge.path}`, (req, res) => {
    res.setHeader('Content-Type', 'image/svg+xml');

    let format = badge;
    const { template } = req.query;

    if (template) {
      format = { ...badge, template };
    }

    const svg = badgeFactory.create(makeBadge(format));

    res.send(svg);
  });

  router.get(`/${badge.path}/:year`, (req, res) => {
    res.setHeader('Content-Type', 'image/svg+xml');

    let format = badge;
    const { year } = req.params;
    const { template } = req.query;

    if (template) {
      format = { ...badge, template };
    }

    if (!isNaN(year) && Number(year) >= 1900 && Number(year) <= 2099) {
      format = { ...badge, year, template };
    }

    const svg = badgeFactory.create(makeBadge(format));

    res.send(svg);
  });
});

module.exports = router;
