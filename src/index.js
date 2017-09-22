// Import CSS File to bundle with webpack
import './index.css';

import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
console.log("The price is " + courseValue) //eslint-disable-line no-console
