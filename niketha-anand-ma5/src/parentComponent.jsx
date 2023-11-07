import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
    //set box click to false on start
  const initialClickedItems = { 1: false, 2: false, 3: false, 4: false };
  const [clickedItems, setClickedItems] = useState(initialClickedItems);

  //handleChildClick handles click values
  const handleChildClick = (itemNumber) => {
    const updatedClickedItems = { ...clickedItems };
    updatedClickedItems[itemNumber] = !clickedItems[itemNumber];
    setClickedItems(updatedClickedItems);
  };
  //In parentcomponent we create 4 boxes and call the childcomponent. We use the color and onclick values as props
  return (
    <div className="parent-container ">
      <div className="grid-container">
          <h1>Count: {Object.values(clickedItems).filter((isBlack) => isBlack).length}</h1>
        <div style={{ display: 'flex' }}>

          <ChildComponent isBlack={clickedItems[1]} onClick={() => handleChildClick(1)} />
          <ChildComponent isBlack={clickedItems[2]} onClick={() => handleChildClick(2)} />

        </div>
        <div style={{ display: 'flex' }}>

          <ChildComponent isBlack={clickedItems[3]} onClick={() => handleChildClick(3)} />
          <ChildComponent isBlack={clickedItems[4]} onClick={() => handleChildClick(4)} />

        </div>
      </div>
    </div>
  );
}

export default ParentComponent;
