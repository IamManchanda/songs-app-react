import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ selectedSong }) => {
  if (selectedSong) {
    return <Fragment>
      <div className="radius bordered shadow card">
        <div className="card-section">
          <h3>{ selectedSong.title }</h3>
          <h5>{ selectedSong.duration }</h5>
          <p>{ selectedSong.description }</p>
        </div>
      </div>
    </Fragment>;
  }
  return null;
};

SongDetail.defaultProps = {
  selectedSong: null,
};

export default connect(
  ({ selectedSong }) => ({ selectedSong }), 
  {},
)(SongDetail);
