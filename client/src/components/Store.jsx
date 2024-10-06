import React from "react";
import storeData from "./storeData";

const Store = () => {
  return (
    <div className="store">
      <h2>Puff Store</h2>
      <div className="store-items">
        {storeData.map((item) => (
          <div className="store-item" key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              className="store-item-image"
            />
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <button className="purchase-button">Purchase</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
