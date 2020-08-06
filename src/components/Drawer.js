import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './drawer.css';

function Drawer({ onToggle, open, mobile, menus }) {
  const [currentMenu, setCurrentMenu] = useState("");
  const location = useLocation();

  useEffect(() => {
    setCurrentMenu(location.pathname)
  }, [location])

  function onClick() {
    if (mobile) {
      onToggle()
    }
  }

  return (
    <aside className={`drawer ${open ? "open" : ""}`} >
      <ul className="drawer__menu">
        {menus.map((menu) => (
          <li className={`${currentMenu === menu.path ? "active" : ""}`}>
            <FontAwesomeIcon icon={faCheck} />
            <Link to={menu.path} onClick={onClick}>
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Drawer;
