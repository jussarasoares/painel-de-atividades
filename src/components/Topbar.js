import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './topbar.css';

function Topbar({ onToggle }) {
  return (
    <header className="topbar">
      <div className="topbar__container">
        <button className="topbar__icon" onClick={onToggle}>
          <FontAwesomeIcon icon={faBars} color="white" size="lg" />
        </button>
        <h1 className="topbar__title">AVA Teste</h1>
        <button className="topbar__icon">
          <FontAwesomeIcon icon={faInfoCircle} color="white" size="lg" />
        </button>
      </div>
    </header>
  )
}

export default Topbar;
