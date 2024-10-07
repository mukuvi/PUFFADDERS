import React, { useEffect, useRef } from "react";
import storeData from "./storeData";

const Store = () => {
  const storeRef = useRef(null);

  const handleKeyDown = (event) => {
    if (storeRef.current) {
      if (event.key === "ArrowRight") {
        storeRef.current.scrollBy({ left: 200, behavior: "smooth" });
      } else if (event.key === "ArrowLeft") {
        storeRef.current.scrollBy({ left: -200, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="store" ref={storeRef}>
      <h2>Puff Store</h2>
      <small>Support us by purchasing from our Puff Store!</small>
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
