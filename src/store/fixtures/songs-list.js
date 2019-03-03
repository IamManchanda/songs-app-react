/* Fixtures - Song List */

import { uuidv4 } from '../../lib/utils';

const SONGS_LIST = [
  {
    id: uuidv4(),
    title: 'No Scrubs',
    duration: '04:05',
  },
  {
    id: uuidv4(),
    title: 'Macarena',
    duration: '02:30',
  },
  {
    id: uuidv4(),
    title: 'All Star',
    duration: '03:15',
  },
  {
    id: uuidv4(),
    title: 'I want it that way.',
    duration: '01:45',
  },
];

export default SONGS_LIST;
