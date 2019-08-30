import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal2';
import Highlight from 'react-highlight';
import clipboardCopy from 'clipboard-copy';
import Badge from './badge';
import CopyButton from './copy-button';

async function copyMarkup(message) {
  clipboardCopy(message);
}

export default function Popup({ onClose, hackathonInfo }) {
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

Popup.propTypes = {
  onClose: PropTypes.func,
  hackathonInfo: PropTypes.object,
};

Popup.defaultProps = {
  onClose: Function.prototype,
  hackathonInfo: {
    path: 'mangohacks',
    name: 'Mangohacks',
    location: 'Miami, FL',
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
  }
}