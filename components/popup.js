import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal2';
import Highlight from 'react-highlight';
import clipboardCopy from 'clipboard-copy';
import Badge from './badge';
import CopyButton from './copy-button';
import { buildHtml, buildMarkdown } from '../helpers';

async function copyMarkup(message) {
  clipboardCopy(message);
}

function Popup({ onClose, hackathonInfo: { link, path, name, location } }) {
  const [ colors, changeColors ] = useState([ '#0076ff', '#0076ff' ]);
  const [ placeholder, changePlaceholder ] = useState('Copy');

  const html = buildHtml({ link, path, name });
  const markdown = buildMarkdown({ link, path, name });

  return (
    <Modal
      backdropClassName="popup__container flex"
      modalClassName="popup"
      onClose={onClose}>
      <div className="popup__messaging">
        <div>
          <div className="hackathon-name-popup">
            <strong>{name}</strong>
            <CopyButton
              colors={colors}
              placeholder={placeholder}
              onMarkupRequested={(value) => {
                copyMarkup(value == 'html' ? html : markdown);
                changeColors([ '#00b51a', '#00b51a' ]);
                changePlaceholder('Copied!');
                setTimeout(() => {
                  changeColors([ '#0076ff', '#0076ff' ]);
                  changePlaceholder('Copy!');
                }, 500);
              }}
            />
          </div>
          <h2>{location}</h2>
        </div>
        <a href={link} target="_black">
          <Badge path={path} template="for-the-badge" />
        </a>
      </div>
      <div className="popup__contributors-container">
        <h4>HTML</h4>
        <Highlight language="html">{html}</Highlight>
        <br />
        <h4>Markdown</h4>
        <Highlight language="markdown">{markdown}</Highlight>
      </div>
    </Modal>
  );
}

Popup.propTypes = {
  onClose: PropTypes.func,
  hackathonInfo: PropTypes.object,
};

Popup.defaultProps = {
  onClose: Function.prototype,
  hackathonInfo: {
    path: '',
    name: '',
    location: '',
  },
};

export default Popup;
