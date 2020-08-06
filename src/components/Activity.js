import React from 'react';

function Activity({ name, description }) {
  return (
    <div className="activity">
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Activity;
