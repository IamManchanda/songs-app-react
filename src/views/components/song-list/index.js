import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import SongListItem from './song-list-item';
import { handleSongSelection } from '../../../store/actions';

const SongList = ({ songs, handleSongSelection }) => <Fragment>
  { songs.map((song) => <SongListItem 
      song={ song } 
      key={ song.id }
      onSongSelect={ handleSongSelection }
    /> ) }
</Fragment>;

SongList.defaultProps = {
  songs: [],
  handleSongSelection: () => {},
};

export default connect(
  ({ songs }) => ({ songs }), 
  { handleSongSelection },
)(SongList);
