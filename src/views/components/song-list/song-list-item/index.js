import React, { Fragment } from 'react';

import { buttonSpacing } from './scoped.module.css';

const SongListItem = ({ song, onSongSelect }) => <Fragment>
  <div className="radius bordered shadow card">
    <div className="card-section">
      <div className="grid-x grid-margin-x">
        <div className="cell medium-8">
          <h4>{ song.title }</h4>
        </div>
        <div className="cell medium-4">
          <div className="float-right">
            <button 
              className={ `button primary ${buttonSpacing}` }
              onClick={ () => onSongSelect(song) }>Select</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</Fragment>;

SongListItem.defaultProps = {
  song: null,
  onSongSelect: () => {},
};

export default SongListItem;
