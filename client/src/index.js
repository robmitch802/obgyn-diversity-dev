import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Firebase, { FirebaseContext } from './components/firebase'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
      <App />,
   </FirebaseContext.Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
