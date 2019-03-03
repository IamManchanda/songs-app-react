import React, { Fragment } from 'react';
import SongList from '../../components/song-list';
import SongDetail from '../../components/song-detail';

const Home = () => <Fragment>
  <div className="grid-container fluid">
    <div className="grid-x grid-padding-x grid-padding-y">
      <div className="cell medium-6 large-4">
        <SongList />
      </div>
      <div className="cell medium-6 large-4">
        <SongDetail />
      </div>
    </div>
  </div>
</Fragment>;

export default Home;
