import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// bundle.js (post Webpack digestion)
function reveal(person, realIdentity) {
  person.identity = realIdentity
}
 
const gutMensch = {
  name: "Andrew Cohn",
  identity: "Friendly Neighborhood Flatiron Teacher",
}
 
reveal(gutMensch, "Chrome Boi")

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
