import React from 'react';
import ReactDOM from 'react-dom/client';
import { firebase } from './firebase';
import Rouite from './routes';
import './Resources/css/app.css'

const App = (props) =>{
  return(
    <Rouite {...props}/>
  )
}


firebase.auth().onAuthStateChanged((user)=>{
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App user={user}/>
    </React.StrictMode>
  );
})