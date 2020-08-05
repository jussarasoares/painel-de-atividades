import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './drawer.css';

function Drawer({ open }) {
  const [currentMenu, setCurrentMenu] = useState("");
  const location = useLocation();

  useEffect(() => {
    setCurrentMenu(location.pathname)
  }, [location])

  return (
    <aside className={`drawer ${open ? "open" : ""}`} >
      <ul className="drawer__menu">
        <li className={`${currentMenu === "/" ? "active" : ""}`}>
          <FontAwesomeIcon icon={faCheck} />
          <Link to="/">
            Atividade 1
          </Link>
        </li>
        <li className={`${currentMenu === "/atividade2" ? "active" : ""}`}>
          <FontAwesomeIcon icon={faCheck} />
          <Link to="/atividade2">
            Atividade 2
          </Link>
        </li>
        <li className={`${currentMenu === "/atividade3" ? "active" : ""}`}>
          <FontAwesomeIcon icon={faCheck} />
          <Link to="/atividade3">
            Atividade 3
          </Link>
        </li>
        <li className={`${currentMenu === "/atividade4" ? "active" : ""}`}>
          <FontAwesomeIcon icon={faCheck} />
          <Link to="/atividade4">
            Atividade 4
          </Link>
        </li>
        <li className={`${currentMenu === "/atividade5" ? "active" : ""}`}>
          <FontAwesomeIcon icon={faCheck} />
          <Link to="/atividade5">
            Atividade 5
          </Link>
        </li>
        <li className={`${currentMenu === "/atividade6" ? "active" : ""}`}>
          <FontAwesomeIcon icon={faCheck} />
          <Link to="/atividade5">
            Atividade 6
          </Link>
        </li>
      </ul>
    </aside>
  )
}

export default Drawer;
