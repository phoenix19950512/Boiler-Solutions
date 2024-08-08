import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './layout/header';
import { BodyComponent } from './layout/body';

function App() {
  return (
    <div className="App">
      <Header />
      <BodyComponent />
    </div>
  );
}

export default App;
