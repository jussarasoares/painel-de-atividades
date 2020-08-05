import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Topbar from './components/Topbar';
import Drawer from './components/Drawer';
import './App.css'

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
            <Route path='/' exact>Atividade 1</Route>
            <Route path='/atividade2'>Atividade 2</Route>
            <Route path='/atividade3'>Atividade 3</Route>
            <Route path='/atividade4'>Atividade 4</Route>
            <Route path='/atividade5'>Atividade 5</Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
