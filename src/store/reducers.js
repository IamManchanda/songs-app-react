/* Reducers */

import { combineReducers } from 'redux';

import SONGS_LIST from './fixtures/songs-list';

export const songs = () => SONGS_LIST;
export const songSelected = (selectedItem = null, { type, payload }) => {
  if (type === 'HANDLE_SONG_SELECTION') return payload.song;
  return selectedItem;
};

const reducers = combineReducers({ songs, songSelected });
export default reducers;
