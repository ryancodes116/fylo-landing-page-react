import React from 'react';
import './App.css';
import Header from './components/Header';
import Details from './components/Details';
import SignUp from './components/SignUp';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Details />
      <SignUp />
      <Footer />
    </div>
  );
};

export default App;
