import React from 'react';

export default function({ path, template = 'flat-square' }) {
  return <img src={`/${path}?template=${template}`} />;
}
