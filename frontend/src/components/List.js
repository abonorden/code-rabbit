import React from "react";

export default function List({ items }) {
  const sortedArray = [...items]
  sortedArray.sort()
  return (
    <>
      <ul>
        {sortedArray.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </>
  );
}
