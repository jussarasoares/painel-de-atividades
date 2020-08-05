import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Topbar from './components/Topbar';
import Drawer from './components/Drawer';
import Footer from './components/Footer';
import './App.css'
import Activity2 from './pages/activity2';
import Activity3 from './pages/activity3';
import Activity6 from './pages/activity6';
import Activity5 from './pages/activity5';
import Activity4 from './pages/activity4';
import Activity1 from './pages/activity1';

function App() {
  const [isOpen, setIsOpen] = useState(true);

  function onToggle() {
    setIsOpen(!isOpen)
  }

  return (
    <BrowserRouter>
      <div className="app">
        <Topbar onToggle={onToggle} />
        <Drawer open={isOpen} />
        <main className={`app__content ${isOpen ? "open" : ""}`}>
          <Switch>
            <Route path='/' exact>{Activity1}</Route>
            <Route path='/atividade2'>{Activity2}</Route>
            <Route path='/atividade3'>{Activity3}</Route>
            <Route path='/atividade4'>{Activity4}</Route>
            <Route path='/atividade5'>{Activity5}</Route>
            <Route path='/atividade6'>{Activity6}</Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
