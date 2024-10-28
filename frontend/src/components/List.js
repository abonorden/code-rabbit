import React from "react";

export default function List({ items }) {
  function alphabeticalSort(itemList) {
    const itemsLength = itemList.length - 1;
    for (let i = 0; i < itemsLength; i++) {
      for (let j = 0; j < itemsLength - i; j++) {
        if (itemList[j] > itemList[j + 1]) {
          const temp = itemList[j];
          itemList[j] = itemList[j + 1];
          itemList[j + 1] = temp;
        }
      }
    }
    return itemList;
  }
  alphabeticalSort(items);
  return (
    <>
      <ul>
        {items.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </>
  );
}
