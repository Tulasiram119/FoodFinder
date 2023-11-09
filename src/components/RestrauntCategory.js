import { useState } from "react";
import ItemList from "./ItemList";

const RestarauntCategory = ({ data, show, setShowIndex }) => {
  const { title, itemCards } = data;

  return (
    <div>
      <div
        className="bg-gray-100 w-6/12 mx-auto my-4 p-4 shadow-lg cursor-pointer"
        onClick={setShowIndex}
      >
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {title + " (" + itemCards.length + ")"}
          </span>
          <span>🔽</span>
        </div>
        <div>{show && <ItemList itemCards={itemCards} />}</div>
      </div>
      {/* <ul>
                {itemCards.map((item)=><li>{item.card?.info?.name}</li>)}
            </ul> */}
    </div>
  );
};

export default RestarauntCategory;
