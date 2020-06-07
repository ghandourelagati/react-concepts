import React from 'react';

export default function HandlingEvents() {
  function handleClick(e) {
    e.preventDefault();
    console.log('This link was clicked');
  }
  return (
    <div>
      <a href="#" onClick={handleClick}>
        Click me
      </a>
    </div>
  );
}
