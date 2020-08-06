import React from 'react';
import { ReactComponent as SelectActivity } from '../assets/images/select-activity.svg';
import './default.css';

function Default() {
  return (
    <div className="default">
      <SelectActivity />
      <h1>Selecione uma atividade!</h1>
    </div>
  )
}

export default Default;
