import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Home from './views/pages/home';
import reducers from './store/reducers';

const store = createStore(reducers);

render(<Provider store={ store }><Home /></Provider>, document.getElementById('root'));
