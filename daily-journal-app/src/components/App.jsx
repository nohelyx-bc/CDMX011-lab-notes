import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

export function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Esta es mi primera App de React uwu!!</h1>
      </div>
      <Route path='/' component={ }/>
      <Route path='/login' component={ }/>
      <Route path='/register' component={ }/>
    </BrowserRouter>
  );
}