import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css'
import useMedia from './utils/useMedia';
import Topbar from './components/Topbar';
import Drawer from './components/Drawer';
import Footer from './components/Footer';
import Activity from './components/Activity';
import Default from './components/Default';
import activities from './data/mock_activity.json';

function App() {
  const isMobile = useMedia(
    ['(max-width: 700px)', '(min-width: 701px)'],
    [true, false],
    false
  )
  const [isOpen, setIsOpen] = useState(false);

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
              <Route path={activity.path} exact>
                <Activity name={activity.name} description={activity.description} />
              </Route>
            ))}
            <Route component={Default} />
          </Switch>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
