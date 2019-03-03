/* Reducers */

import { combineReducers } from 'redux';

import state from './fixtures/songs-list';

export const songs = () => state;
export const selectedSong = (selectedItem = null, { type, payload }) => {
  if (type === 'HANDLE_SONG_SELECTION') return payload.song;
  return selectedItem;
};

const reducers = combineReducers({ songs, selectedSong });
export default reducers;
