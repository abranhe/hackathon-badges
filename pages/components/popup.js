import React, { useState, useRef } from 'react';
import Modal from 'react-modal2';
import Highlight from 'react-highlight';
import clipboardCopy from 'clipboard-copy';
import Badge from './badge';
import CopyButton from './copy-button';

async function copyMarkup(message) {
  clipboardCopy(message);
}

export default function({ onClose, hackathonInfo }) {
  const indicatorRef = useRef();
  const [colors, changeColors] = useState(['#0076ff', '#0076ff']);
  const [placeholder, changePlaceholder] = useState('Copy badge');

  const html = `<a href="${hackathonInfo.link}">\n  <img src="https://hackathon.badge.pw/${hackathonInfo.path}" alt="${hackathonInfo.name}">\n</a>`;
  const markdown = `[![${hackathonInfo.name}](https://hackathon.badge.pw/${hackathonInfo.path})](${hackathonInfo.link})`;

  return (
    <Modal
      backdropClassName="popup__container flex"
      modalClassName="popup"
      onClose={onClose}
    >
      <div className="popup__messaging">
        <div>
          <div className="hackathon-name-popup">
            <strong>{hackathonInfo.name}</strong>
            <CopyButton
              ref={indicatorRef}
              colors={colors}
              placeholder={placeholder}
              onMarkupRequested={value => {
                copyMarkup(value == 'html' ? html : markdown);
                changeColors(['#00b51a', '#00b51a']);
                changePlaceholder('Copied!');
                setTimeout(() => {
                  changeColors(['#0076ff', '#0076ff']);
                  changePlaceholder('Copy badge!');
                }, 500);
              }}
            />
          </div>
          <h2>{hackathonInfo.location}</h2>
        </div>
        <Badge path={hackathonInfo.path} template="for-the-badge" />
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
