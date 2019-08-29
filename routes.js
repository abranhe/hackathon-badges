import { Router } from 'express';
import { BadgeFactory } from 'gh-badges';
import { MakeBadge } from './helpers';
import { Badges } from './badges';

const router = Router();
const badgeFactory = new BadgeFactory();

Badges.forEach(badge => {
  router.get(`/${badge.path}`, (req, res) => {
    res.setHeader('Content-Type', 'image/svg+xml');

    let format = badge;
    const { template } = req.query;

    if (template) {
      format = { ...badge, template };
    }

    const svg = badgeFactory.create(MakeBadge(format));

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

    const svg = badgeFactory.create(MakeBadge(format));

    res.send(svg);
  });
});

router.get('/api/hackathons', (req, res) => res.json(Badges));

export default router;
