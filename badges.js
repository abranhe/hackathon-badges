/**
 * Mangohacks Badge
 * https://mangohacks.com
 */
const mangohacks = {
  path: 'mangohacks',
  name: 'Mangohacks',
  location: 'Miami, FL, United States',
  colorA: '#ed821e',
  logo:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAADWElEQVQ4y22SfWxTZRTGHza21mF1OhlgR0YEhOBHFDI1fgYBP9CRYIbG6HTLFIJOJG6GzG2ZCpolxlmzNBvJlllpBrJsA7UZTi1jKaXOcrl2N0tXa725er17eXN36evleikxr38gyUb7/Hee8zsnJ08OME/3A/DfEfucJNk/7IJyWthzqHQMR10Dq1ehHlnyorFAqKa/WpeMuBzUTrMZ+7J+MvhwqoFO/HB79Fr8BRTnx962/jbORl/0Ln3IWX/94Np4M1OZTpNEkj/m2DAXfxAcY88as/Kwr5xhGwCgHsDoI8aUIcuC+Blw99yBAI6U6hFyxrv86Bx3AzjGN5vn/+VkUqxpKei62tgIjvgbpiE+Y2PHvEMbUZiX+jRzmQqMxmv5VduP3hL6Exna5/RkRSFDvNeaiTXI7frkidUAgFXgEJ83jVilCWeO7N530BF9oG+FLiabAADdaC+iAXqq54b+7KxxCziSHzDJe7PiIeMA3oQG4UlmSHUca5BLGcRfNf8Il6deoeqV/Yvo1/TskdLjyK0Uxqt0bXBt9Ali4ClwiC+ZafE1joostBGfFIV3dhcnqtlfwZXi02QWYXyz0pgko13F/hy730PndeG6jptSbcZ0V0myhigYcOk+RiKP6rgrC+9El0PaLpZtLyAB+i3ylP1aBIl6i8mNWPByFu6EjfAmg8QqR9YxTd7LoX6l9EGPku86XL4s/AEE0LtUO0nPdbqT7aYSXtNzI51I7QFLJ5o5yq/Bi6Ggb5ly2EoLVcH7zPOajyN4J40Lj4GxZBPHknl4GyoLxjaSU9bFqXdDbvP7DFePFeZHn9PEQ2XQfiHH3nJ+BABYhlpsXehZEtqa+tJMM03c6Vms+uxZqVv/PbI50awGdjggNplpcbc7rwXACQy7lS/0aStjMvXw4Ppet9pvWcmmd1xaP51UflY6OOArIUPmBanB45IQRGAdOUdC8QPHK7YVjT5Oz1gXpdZWZxhjt5GgzRO7OSBieIUWsDPaiFDlL9u1qO/W10vaSiNbFJ/JzD+FuprCD3EPVAwsn/KGtiQAFybQs1g6YM7YGfYb+dEeIqP6tG1bac0fWr9wQe3/QbRgn2OXY++VYj+q88crpA5VorbJ9UskkTwY3tTqzPXs/wFTeMBV0Y/b3gAAAABJRU5ErkJggg==',
  link: 'https://mangohacks.com',
  more: {
    logo:
      'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/001/081/thumb/Screen_Shot_2018-12-27_at_1.16.21_PM.png?1545934765',
    thumbnail:
      'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/081/thumb/event_bg_square_2.jpg?1545934765',
  },
};

/**
 * ShellHacks Badge
 * https://shellhacks.net
 */
const shellhacks = {
  path: 'shellhacks',
  name: 'ShellHacks',
  location: 'Miami, FL, United States',
  colorA: '#ff1f8f',
  logo:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAACMCAMAAABiZYaWAAAC7lBMVEUAAAD/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////jtXoAAAA+XRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OT1BSU1RVVldZWltcXV5fYGNk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',
  link: 'https://shellhacks.net',
  more: {
    logo:
      'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/001/202/thumb/__MLH_Icon__100_x_100_.png?1557514832',
    thumbnail:
      'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/202/thumb/__MLH_Banner__300_x_300_.png?1557514832',
  },
};

/**
 * Uhack Badge
 * https://uhack.miami
 */
const uhack = {
  path: 'uhack',
  name: 'Uhack',
  location: 'Miami, FL, United States',
  color: '#e3793b',
  colorA: '#2a6118',
  logo:
    'data:image/png;base64,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',
  link: 'https://uhack.miami',
  more: {
    logo:
      'https://scontent.fmia1-2.fna.fbcdn.net/v/t1.0-9/23472369_1492435167508264_4800876244545045884_n.png?_nc_cat=111&_nc_oc=AQmv9LlqOj4NyCzciofBE6Lcz6jvohY-9ZzedE5bmP5di_UGrNYkQbNvjnXrGYLuESuzDwRLvboxXzpGAswJDfpw&_nc_ht=scontent.fmia1-2.fna&oh=7907729265d4f9245e869426f0e1f2c9&oe=5DD3875E&s=100',
    thumbnail: 'https://uhack.miami/img/um-campus.jpg',
  },
};

/**
 * Madhacks Badge
 * https://www.madhacks.io/
 */
const madhacks = {
  path: 'madhacks',
  name: 'MadHacks',
  location: 'Baltimore, MD, United States',
  colorA: '#0e3d52',
  logo:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAJwUlEQVR42u2YeVCU9xnHrcYeiRrkvkFNTNrpkWqbzjg1NZ3pMbExtYPR1GoSrQkeeAdFREGjCAIih1IBj0rUGJRD1KgUFAVEqSg3yy6wsPe9XLv77vHt89sukBXEmpj+5TPznd133+vz+z7P8/vt+455Fs9ihADwHdJE0kzSH0nTSM99Zf9Yx/5fkd4g+ZHG/7/gfmCxGDeoePeapbdyoazIhUHW1g3gMGky6fsWiyW0WyHpkt8rhrL8HHpb75gtnOEMgJ98m2DMFS+r1bqroSQP9RGz0LbSG8KVHpAnzoOBV2kFkKfX61+WtTWpHiQttfHDpqFjpSekUTOhytsLq4W7BOCHbBBPE2wCabnNZus0dOt75Lwa7vJCNyjXuEMd5gHNWg+owtyhK4yDxcxZe3p6ePwLabbWFa60n46h/XQcfXqi5/5Vi6Fb10uDHHB82jeFm96nV99sLy9Cdcwi3Jn/IjqWT4ZyNQMbEgOQrQ8EJxPAzJk44ZkYyFa5OfYNibfMFTfmvYCO6LegLc2BUSmWAJaFXxfOz2joy2r8MgN3NwSgbbUbWhZPgizU1QHmDChf50+AfBj7e7mmzPWQr3aHilyWEKiYJAx1Q+MHk1H1l4lQLHWB/ENPqE9GwNKjbQMwizXZk3ToPIvZzGu4mmm4F/Uy1Pv8oNnnC+E2T9Qud2HpHQ643gFo6ONasjeRg+6QMciNVAKbPKHc6InWlW741zsT0EUDVb0/GYq/+0B5Ohpcf58UwAHSC48FNJvNs3t1KkFJ6nK07/SCLt4f+v1DEkV7o/p9FyjWuDlSx5wimHV+g4D1RzZCsGIyJOS69hMvJjukdJ07xGFuuLtwIjrfmwQlOamga3VumAmTvN0KqzWCNeNo7o03GPqOVX8Ri/YYPwY0onjhHqj7wMWeRhnBdRJk23o/GB2ADeSgaC01CEFpNpMIsGKJC/5NzhE41as7KkMmQrhkEoQfuqCdalOUsQJcj1rc39/vPxrg8ypJm6om6S1K6YiA5KgfFHu8Ub/BHfJdPvbjlHF+kMZPBacS/DfFn4eDv80LdStdIV7rRu55oOkjV1yZPwEdoQRDaRdFeUOxkxTtA3mMDxTJr8MovAuKRaMBBotbqtGcMIuBDAPTxvlCuccHMvrsTgkclP5gINQpL8GsFsBEgPzzW6FOCqDfA9C0hbp3FXU+DUi52YNBDbs2kzYhGIaGfFDEjJhmAD+jDhRWH18HQTSD8XNAUYOQ1PtolLHkWJI/u7FDowIODoAXSW5+TKmN8nKCG2bA2aUwaUWgCHNaGtnMTpNn7v1rOaiL8LKnTUVdKyG3pIl0YnogNIdIhwMhT/VHI6Wki/arCVaXHPBYQDYYwQ4vtGyneqSBUiZIfkxOwHYz8sNAi0ILgNcGAakwAwDU5Ef/CQqCkuz1gT4rGPqjU+zqPjYFPcenMtm/6+g3TWYQand7oyvOh0E+MsWaA/6QJ/iBv8cXZVupk9MD0Brvg6pwTzRFekKymxniOwiqjvOHxdirBhDyVQdfpAW+9Er6KnTt92VQdhhtdjBk5J6OPml7RInSAsHfy5ymJhkE3AIFQakO+kNCkI4BjihxWgBqyd1OGqxyrw+d8xqsZq4TwByn6YVSXFh+LgGdqYGDJwuT/VFL9aNMCWDbj5QiIwitcVNgHOhiApTQubrsIFKwQywjwQx2GDDb7iSnmwhUmv02iIXnlGIAbyqlwq7i6OmUvqGT2+mk25s8WO05XZBuxG7ONHjDmzuDoZU4VpIr8VB+Phf68/MGdTf+VdTH+0KWQbWWFcSuMwxScTgIlZu80c8r4QBEMeMGlrbwB2W5NgEBPXTSsBGz9BfRxCylm6mogXSsVo9NhfzoT8Fp22EyGjh+SQrU50PQXbjQSbr8BeBlzkFT8nQCHahvZ9D6WF90FDA2XCK52gHJ0ojGqiIbjwqb1R2zW0n1o6b6I7hh6aykuY01BpMyiRw5NRuq/EXgusWjAjLpC961g9anvY62VHudDzOl48s9rJOvAHAbWH/ndWtVyvxtr4BPxd0YSQt8LBUs6y7n9Npr6XworQ4MjAA1Ob+131Rd8FeYRwV0ljYvBM0Zs8FPcXaRlVi/tAYUCaTvDtTgOOrikvLziaje4Q1htA/7k0CiFKY7AzKxGmonQMnxXzO4JwR0drM6cSaleyhT+gsLQdFKmun0d57SXFqel4jaT33RRDO+mk3EbCKlwqUROjSUBu3xV6E7N5fd6GsDMrHjKj4NGky1vnAEQBZsmnlwMxdNCf7oohqUkkOig1MgOf07KC/+DYqixWg/MQftKcHQZNFknfMLBvaNAZkq9/8cEioluwk3wkHRSPrRw/8DI3u0ChRHBUKR+RLkpZuhvpcKTW0GtHVH7FI/yICiOhn8wlA0pM2Alor9SQC1ee9CmRtilyZvAXSOAYpOzUULNSjr6j5hGSgqSS5OgACm0ENPR9OtU2i4sguaukzoGrJHFNvXcX0PGnPeg4ZARgJUnFsAVeEyiAtWQXh2ib1zlUUfQ3HzIOTXEyC5FgveF2FoO7MEnadDUHfgFehuRMLKGTkAq8aMFAaD4TfG/v7SiuJTkN07zGAeKW19FtpvxKIy9Q/MSSdA3o1sSC5vhepWCrS3M1CX8xE6ct6B6moEbf8DuqojTOw7HZMGQcE2tF6ItHG9ShGALaTvPfJ5hLp5TX1NOXhlyQMwozrJuxqNtn++PQhoZIAVeeRU+iCI/MZByEr2Q1NxmG07qfpEKO1Pgq61zGa1Wgof+8wM4A1yQVT4WRy6qtIZBHNrVCeLE34PVdFyWHplNo4zmQTVlwcARxVzsPNaPBR3TsDYp+UAhJPGPg7weZPJtL2/r4eru12IloqjaL2ZDHlNxiMBmws2QFNzEjYrZwGQ1Vpz3Sa4kjgqnJwGIC4/CmXdZfR3K620chT+zw/yCoViAqX6z319PSValQQqSQvKLhyA/N7IkKLbKegW3bdpVLIIANM721pMVTTpqx9KacNny6C4tgMyguuWtqBXIwVnMogAfEIKYiX2xG+x+PwHnkaD4aRWLbdUXExD151DlPYsu1S1WdRMR6CRNFJqjSJqsiCWIlJ4c101V3x0O6Rlh6CqyMD1zJXUKPOpeTZDLxeAHBMAmPFU3nqJxWKW9sQevaZZ2FpjFtQWo72+GPLO++jv1VooSsxmw5sDx6vV6kk08e+m5b22rb7K3FJ1ES2VhRDWXIJBJ1UT3TUAv3zab7fG9/XpZtBz8zJSTG+v7gB9RlsspsUajSZwhOPHkX5MWuJIYSRpHWkuyWPMtxlnz54dV1pa+hxL5xO8Thlrr7Fn8Syc4z/28EBO70ZG+AAAAABJRU5ErkJggg==',
  link: 'https://www.madhacks.io/',
  more: {
    logo:
      'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/001/020/thumb/madhacks-logo.png?1539966546',
    thumbnail:
      'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/260/thumb/mad1.png?1565904760',
  },
};

/**
 * Sunhacks Badge
 * https://sunhacks.io/
 */
const sunhacks = {
  path: 'sunhacks',
  name: 'Sunhacks',
  location: 'Phoenix/Tempe, AZ, United States',
  colorA: '#ffa200',
  logo:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAkCAYAAAD7PHgWAAAEqElEQVR42uVXXWgcVRSetlrapIk+CVYFkwetgjSNvopP6oPQF1v8odpo0EIRUSilVHQLomiiIIpoSZv+vAi1Ru1DpBaNxBpjSLIm3ZKku/nZJJtmszuzszs7O793Pu/MNrNzze5ms8nGgAcGhrnnfue759zzMxyXR5CJtBBTjSM9/RnEoTqA28StsQBd25Ace4ZoqQCIEkboy/tK3zw/VA2iCbBFT4aRDD4Nbu1I2lhIh5+0dCHk2LBMEbEfa1YGkgq1wiOWEh8GHyl6SgwdqbafojoUg2SiQ15sIoU/L+ukliHNgWFpqpi5sD3/teDvXVTLFDiIE1YaTwZSS0XLDoUZ8x8Gy1AH5vN6yNSVJlfNVJryE6RXB0RnIJMjb5R/V06+fjt00e91ITBak984mj1mm/PrjNZkMW6hqeLfto3VXWjpxkNIBY9RvDao4hkEAlvLJkj3Qk+121hEHDluY3OVEmhiC5ToFcz+0VCIIKJ/7baU2GVowscct/alqnDySNPf5m5l6nxBglr8rPtFCl9cF3KIXHnVW3yQnHipIMH01AFHZzF3IpebK0tukpYJa7FMWBb4sedzd1D3ENRdIqYYes7RdbbQvRSjcgST/hdtM44xJd7OrKVnd7v8EpMNzJrKn3bLgNB3YHUtaKJ9H9HVTkvhf8ClR6vY7jJ+I+ekSOO/sngTpODDzkPfmTU50pi7i+NBZu3S3VU04TpAbZrBtn1LWirRxFaSDJ4gqtBt6XKaKcuqMAg5ttMNr1euHi25dyLg28EW/GyY5fjMPbTODrDNSklZmthFI/IOIj89yBFDDqGYmPK5rIcWGCMrn168srDD+UaUs0Vtq7EovVfjD1APfkGMzCAlY7Cn0UYwdaHOAZvp2c5sHmqtLj3zfVXMXoqVjcr39zs2WIcYMGQ/5PDXujzVyAL5fJuhKS/DSP9GlX4B31nLrCeue+5goqFkgkL/I+4+cSzMTjedtY4t26ZJbcO3ufwkEof3u1kM8lWp+0j0908Xg0JJvFa5MgNspY98yxaBkdq7vPeuP+4OCEXGtbUjyV97ihrKepGYGShzhwrqxgPP0hotuuGN9R5Zn3bH93/izSWiJgcgXGuBoe61HyIEPoKp/QliEE/C/cytp0BLvEep6ShF5Og5VGqagTJaBzPdhNnODyAMtqH/pDtg4uavT9Au0F2QmJ72Q4q84OrTvZCmTjlYOsUUh+tXmxRbkIn2eYJJwPfWLtG7enQn1MSbCH930XnUxFsYO12/3ERN50kbe0v5BM34wVL/SUo78Hx1FsPr5fjB8gfTTGya5Wepi12gLIJ2N7IxvKIJU2WBEUX4kAEy0uNITe4qaLzLt80ixgh10Kj9Xvh/e3KXg8VgS++v8G+Oq6JlgnecZshzkCb2F2tB8HG3wcx05PpppqOLfiscatpS6SBrmfp89mrrMZzhSh9kMf3NY9SIAHn2XdpH71hWf6Fnz5IMjnQ3Lrsv0XUnTZQTtEqICJ7aU7GaKIXO37WEIP3GbSShv5eDufIRH+A2mmChN/e3F+97ZeMRVMR614FiuH7jEex5OzdxFykz/y1J+eZhU+EPcf8n+Qdw224xKcp6NAAAAABJRU5ErkJggg==',
  link: 'https://sunhacks.io/',
  more: {
    logo:
      'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/001/201/thumb/sunhacks_icon_web__1_.jpg?1557514617',
    thumbnail:
      'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/201/thumb/sunhacksBG.png?1557514618',
  },
};

/**
 * Pennapps Badge
 * https://pennapps.com/
 */
const pennapps = {
  path: 'pennapps',
  name: 'PennApps',
  location: 'Philadelphia, PA, United States',
  colorA: '#919199',
  logo:
    'data:image/png;base64,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',
  link: 'https://pennapps.com/',
  more: {
    logo:
      'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/001/262/thumb/logoSquare.jpg?1566311355',
    thumbnail:
      'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/262/thumb/backgroundImageSquare.jpg?1566311355',
  },
};

/**
 * MinneHack Badge
 * https://minnehack.io/
 */
const minnehack = {
  path: 'minnehack',
  name: 'MinneHack',
  location: 'Minneapolis, MN, United States',
  colorA: '#000',
  logo:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAADqklEQVR42u2YTUhUURTHj7737hsy6QMCCapdFoUUBdIHZdAqEIkS2rXJVn3Qh4ta1MIWtolWRS1CJAikFlJUljhU08z43n2aYmUIGRUimYbjOM7M+7idO6P2xnmjozM5FnPg8mDux/ndc8/933sHIG95+8+NuUFkFKQlBdXvBleEwiamCZWsQ7yoK+LBpREtVaia8JI6k5L7lkZ8BiXDFpXHDVU+Pa/JvYWtzAurswo35oEtlib3IVDY6pBNS3OxWEkD0NMMxQEv7DYVsR4n1WVqLj+jUnn2ItcEAkatHgEj02BpAlZXgzDwQr6Q2E/uY53intmdtkBRRIPNOoW9jEHBbG0DHig1VOJNgss2IFNg3bhXOBz2irUYkUZTI378do17YXvKiSC8oQpHEHD4rwGyLigyVXLdpPJXHHAEvyFsNJlHckRXSF2qKLIeWG5q0r2EvMs6YDesQqhmRwdYDCp/ZO3iLicHwddQhvVjqfouCiB2MHSMMIqua6aDiI9cS91v0QBjjj4zFUoTlpfCCnT+xd5OV+TB3ABiTqJGPbQPrlPxEv5u2dv9aC28nCPAePn1Mr6je1Fcsc8ne51JJXd7o7QzHcCeJiDc7+gb2BjySnfnD0jlCSxG0oZRyWPWCSt1RajkO942aBTl5lAqQC7mrAPWjrZJ5diuCs/nK6YqtaCMBRxWKy3AXifxxQFHw37pLH4b7BPA/hrqaIkDYBjbPsDo3kA5atFV+QPq688/MuaYTnMDcocjr2CfmTSQbKFmDmAZskFEDSqdQa0UkgB5jvLzGSM8M18zBsQlWYMzv+W01DPavmOqFMvNZEDnDYd9ghZ1DeIq9YR8ibk8L0CeNzhI5yzyYxgKaRjyQPGsgPFc7Ecl4Mdno6FKpzAltt05CdKCdvE0IN6Go+3ieewUSuF4hG+OqbEcljiKQM8wBY7jxtgfu8hSWJaxzEwBTgryekzwVqccMlX5uf1K7wDII3cu1VmeFUBuE4pUkywJshnwCCfsDtPVwawDxjaMJrUlRo90s+Z47uUckFvUB+WoY0GUHgtvMIP4Bjk602FOAWOQiljLOoRjWLeBPymzCcg1N9JO+nRFuhnCvF8Q4Fw2X8CrAIXfnogHGBVqUr7kcgmY3qssAZDnFxnjYsrve5kAxnOVvOeXg8wBNfIITwSfoRTWRvxQxm8sc73mnMzfADswat/xiLyNF9yKoBtK2FOQM33aFlRAcsIvdCwsQv5fqbzlLW//iP0GvNqKnPwAjTUAAAAASUVORK5CYII=',
  link: 'https://minnehack.io/',
  more: {
    logo:
      'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/001/072/thumb/minnie2.png?1545058723',
    thumbnail:
      'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/072/thumb/background_%281%29.jpg?1545058724',
  },
};

/**
 * CitizenHacks Badge
 * https://citizenhacks.com/
 */
const citizenhacks = {
  path: 'citizenhacks',
  name: 'CitizenHacks',
  location: 'Toronto, ON, United States',
  colorA: '#ed559a',
  logo:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAIAAAADnC86AAAEW0lEQVRYw92XXVPbRhSGtauVLMuWLIMxBtPEIYTyEUggNG2hf6P/rrf5NZ3pRXqRTIYpEAj4Q5YlWZ+r3VUPbtJpMgSMi+lMNbrYkT3z6D275z2viPPzL9J/cZGOVng9Y3WL2r0h9YzVkoScGKVXT1q/zs3eG7gRxc9th3CEYpkEinIPyDLNFqJo3fV3+wNyTzLzHOe5laabjvd9t3/Qte8JbNLsQRBuDrwfuvaG61UpnTpYFkIVohHH2333u17/pe00o/jyVE8bbGTZsh9s9d39jv2t51sp/dhO00MqXOiMPRyGL3rOC9t5NnAbcQLP0bTBZpatuv6O7YDWFX9o0ewzA7mFAsR0nBgktkhQIomGKcECnnOBE6GEXHNZ2Wd6xDWcoQqlj/3gZdd+3h+s+sN6kv6t9dbgIk6bmr2qf9g2jpb1dl31AA/PI16wqXkUNV4HrXdh8ySZVyOyMfCgwged3uNhoDN+hWWOgyzJcV11l4vtp+XjtdIZUBcLjqUEmnxZvZQrLtMXCoNGYbBS6By6S7JXXhvQNTt+GEZWxq726nHAUNsd4/BH682B9bZV7BLMCRJYEmhUO0Xmukzrqr9RPu0Xq8f8AbuYWxwYlb4KjfTVIXE9EjYSqOul033rzZ552NScMrncrX9uF+DhJYgEDCbrLqlJzA/1uToJK1KgSRmZBAz7uqT1tozjg+rbzfLpF8gr/l9ImnNtTmN6gbNQFhnJJwNXlHDLONoqH1dIdJvJR/E3jhwpuavngTYJ2JSj9dLZevnUADAal4uKmdz08qDAD+swH6SrCnUDuICzOdWDGxbjC0aEYyPBRioRPuHhUjCHIpskUrC4BVjOUZGBblhMCJ5i5rr+Z5ZjMCa4yyiVER936guUU5ynMiwmBFOhgB3CrWBXxeOCJYbzQBVBARYTggNWPIwWwQsNAuMhGVdxQnjHFB0zT5SvNf4NYI/pvwcPwJaX9c6C5I4LjlV+ZrFTCxYTKoZhdxQ35nCwjc9naGqWfU2l12sVnsZOquxkVnQqI8UTgSNReJ/Mmyx7l7bn00hRshvAscI/VNgfs+J4Ju8a1xjsDWCDsmYQbUdRK9EsrYYWBa2X8GyIzARrGVIumztnWCQkH2qiX+Jtk7+vivPKyCnRJO2E8pwIUYuTLWew2wtaXdVCs+hcyZZ08sjGDV+qJEi7tLM8JcLXRMdgRzV+WhUXlU/+PBEYknDLD5467n7XXnN9i9JcUkTPyCKVtytIp0hlSB4p5tC1BM4R4POwIKXKhAYCQjXGmmEIcWnPduBzYzH+q5FkyS/mfpFfSJ+s/7Ma/VvnAq0rnv9slIRXvS/T4VQsU+UcvquWh8Fez9npD+BbY36UDq88A3cJBq1rA2/3YxIODMamPiRgU6sJhdh9mYQdFzJpjdI70HUjGLRCYfd6/Z/a9qNhoAkhTfkiJmWArCXJqjt84gfzSVIe5W80bfCm623+5t3pubmLIPA/BP8JC/ZQZtW2rZ0AAAAASUVORK5CYII=',
  link: 'https://citizenhacks.com/',
  more: {
    logo:
      'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/001/221/thumb/citizenhacks_square_logo_%281%29.png?1564081526',
    thumbnail:
      'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/221/thumb/ezgif.com-gif-maker.png?1564081527',
  },
};

/**
 * Hack the North Badge
 * https://hackthenorth.com/
 */
const hackthenorth = {
  path: 'hackthenorth',
  name: 'Hack the North',
  location: 'Waterloo, ON, United States',
  colorA: '#76adcc',
  logo:
    'data:image/png;base64,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',
  link: 'https://hackthenorth.com/',
  more: {
    logo:
      'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/001/222/thumb/icon_main.jpg?1564087097',
    thumbnail:
      'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/222/thumb/mlhcover.jpg?1564087097',
  },
};

/**
 * BigRedHacks Badge
 * https://bigredhacks.com/
 */
const bigredhacks = {
  path: 'bigredhacks',
  name: 'BigRedHacks',
  location: 'Ithaca, NY, United States',
  colorA: '#eb463b',
  logo:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAADqElEQVR42u2Xa0gVaRiA31NHz8ycmTP375uZrrs/CiRDcstI7AJR2G3FLmtpsaStmXYhukGpJUIXT2pFeY6WV7SyxK4URUF/DLb60UK7FC20tVHLdiH6UxDUO5AwTP7wh3mmOAMPDN/3MfPwXd7vfQHiz3f0FASD4/MZZpRX/bgmQipqFSV/LIDgObtclp3cQem1qKa1F3LcT54TrFaUHSdN81E7pfcPalohNg31jFwGgNluGJfOWNa7s5b1vo2QSCbLDveM4JpQKBdn7/75YcM+2rRQ2rNNFBd6xS+xXtdPdpnmm17B06b5qpmQ6tEATKzlfEkASSj0p728TpoN42JGQsKEmAtOAZi6XZIO7JTlFiebRLFyPsNMi6ldOcCQHI5becIwHnZb1lsnGBNvF4vibzEVXIyhJJfnV3ea5r91mhbepSircDbXRXW9s4GQmxtCoWJPCJ4yjEdhSVo+CWAMLvnEfbK8+4iuX/eUIAbqJeMARqQCJO9VlIrDmnZ1UAQzAYZncVxqjiBMcbIQr7ORAPIyni9CwX9QsKyQ57MxYVhRo6pNEV2/MSiCW0VxyR5FidbqepeT/ap6DENMSg7PF3caxlNc0is7JKm6XJbrGnT990ZC7gyKIC5VOd4Sj3uDcC/dpvk8IxCYvZTn1+IMPsVT210qSWUVklSK9/HVZkr/8IwgnuIn9h7MTkiYODcQ+PGEaW5spPSWpwQjhKyYBfDDPIYZ2WEYZQMp6JsO4O+L/griVfcM99y9LaIYLpPlSCulD1oM496ACC4LBlMwVKx1k8fzJUuDQdpfwXOW9eHc53TLfh8oQR9u8NWnLev/L0ABzFAm9FfQ3T9ggmdxQ7s/bmPPwhlK0+KCXhf0jwcgOSyb5mZOYmIynlQtpoJ2fZobCMyqxpTcDUb9qiK8U2MqaM/QZhzUlwAG0rtVGP3jgt+CoA8Z0gc+TwhO9vvTfxGEAhy4xskCls1OwfQ75oJY1Vd0YFV/Cgc5iVJ6ISsYzIu54AZJqumyrNfuAZgw3lzEcQVxwbjg1xYsCYUqMcX+Gw/GCydRQi5nMUzeekHId/fZ2GVhpar+jBVZUV/9yH92Plgry5tbCbnr7j9uGH+l+/0zsPxc1Ybv2PbSyVFCekrw35DP84ux5KtpICTqpEpVt2aybHoBz09399lgcV26TRRT6wmZiR+LuPux7UidJI0uF4R5h1R1t7s/omn70gCSFjDMDJzlMJaa9U7CirLrV/z3Jz3ywZkCMaMKAAAAAElFTkSuQmCC',
  link: 'https://bigredhacks.com/',
  more: {
    logo:
      'https://s3.amazonaws.com/assets.mlh.io/events/logos/000/001/225/thumb/pp2.png?1564759341',
    thumbnail:
      'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/001/225/thumb/cornelltower.jpg?1564759341',
  },
};

/**
 * BharatHacks Badge
 * https://bharathacks.com/
 */
const bharathacks = {
  path: 'bharathacks',
  name: 'BharatHacks',
  location: 'Noida, India',
  colorA: '#0c7d9c',
  logo: 'data:image/png;base64,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',
  link: 'https://bharathacks.com/',
  more: {
    logo: 'https://i.postimg.cc/FznMkYsK/apple-touch-icon.png',
    thumbnail: 'https://i.postimg.cc/YqP7hshx/solve-problems-for-india.png',
  },
};

module.exports = [
  mangohacks,
  shellhacks,
  uhack,
  madhacks,
  sunhacks,
  pennapps,
  minnehack,
  citizenhacks,
  hackthenorth,
  bigredhacks,
  bharathacks,
];
