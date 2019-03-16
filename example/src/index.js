import React from 'react';
import { render} from 'react-dom';
import StyleBubble from '../../src';
import styles from './index.css';

const App = () => (
  <main>
  <span>without a style bubble, this text is red from a stylesheet rule</span>
    <div style={{fontFamily: "courier"}}>
  <span>without a style bubble, this text is in Courier because of an inline style on an ancestor element</span>
    </div>
    <StyleBubble>
    <p>with a style bubble, this text is set to its initial value</p>
    </StyleBubble>
  </main>

);
render(<App />, document.getElementById("root"));