import React from 'react';
import { Header } from './components/layout/Header';
import { Content } from './components/layout/Content';
import './App.scss';

export const App = () => {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}
