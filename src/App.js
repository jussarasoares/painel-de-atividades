import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css'
import useMedia from './utils/useMedia';
import Topbar from './components/Topbar';
import Drawer from './components/Drawer';
import Footer from './components/Footer';
import Activity1 from './pages/activity1';
import Activity2 from './pages/activity2';
import Activity3 from './pages/activity3';
import Activity6 from './pages/activity6';
import Activity5 from './pages/activity5';
import Activity4 from './pages/activity4';

function App() {
  const isMobile = useMedia(
    ['(max-width: 700px)', '(min-width: 701px)'],
    [true, false],
    false
  )
  const [isOpen, setIsOpen] = useState(false);
  const activities = [
    {
      name: "Atividade 1",
      path: "/",
      component: <Activity1 />
    },
    {
      name: "Atividade 2",
      path: "/atividade2",
      component: <Activity2 />
    },
    {
      name: "Atividade 3",
      path: "/atividade3",
      component: <Activity3 />
    },
    {
      name: "Atividade 4",
      path: "/atividade4",
      component: <Activity4 />
    },
    {
      name: "Atividade 5",
      path: "/atividade5",
      component: <Activity5 />
    },
    {
      name: "Atividade 6",
      path: "/atividade6",
      component: <Activity6 />
    },
  ]

  useEffect(() => {
    setIsOpen(!isMobile)
  }, [isMobile])

  function onToggle() {
    setIsOpen(!isOpen)
  }

  return (
    <BrowserRouter>
      <div className="app">
        <Topbar onToggle={onToggle} />
        <Drawer menus={activities} onToggle={onToggle} open={isOpen} mobile={isMobile} />
        <main className={`app__content ${isOpen ? "open" : ""}`}>
          <Switch>
            {activities.map((activity) => (
              <Route path={activity.path} exact>{activity.component}</Route>
            ))}
          </Switch>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
