import React from 'react';
import ReactDOM from 'react-dom';
import StyleBubble from '../src/index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StyleBubble/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
