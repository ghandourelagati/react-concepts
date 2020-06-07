import React from 'react';

export default function ListsAndKeys() {
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map((number) => number * 2);
  const listItems = numbers.map((number) => (
    <li key={number.toString()}>{number}</li>
  ));
  console.log(doubled);
  return (
    <div>
      <ul>{listItems} </ul>
    </div>
  );
}
