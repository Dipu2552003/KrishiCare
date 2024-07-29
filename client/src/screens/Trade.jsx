import React, { useState } from "react";
import cropsData from "../utils/Crops"; // Import the crop data

const Trade = () => {
  const [crops, setCrops] = useState(cropsData);

  const handleBuy = (id) => {
    alert(`Buying crop with ID: ${id}`);
    // Implement buying logic here
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "20px",
        flexWrap: "wrap",
      }}
    >
      {crops.map((crop) => (
        <div
          key={crop.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            maxWidth: "300px",
            padding: "20px",
            textAlign: "center",
            margin: "10px",
          }}
        >
          <img
            src={crop.image}
            alt="Crop"
            style={{ width: "100%", borderRadius: "8px" }}
          />
          <h3 style={{ margin: "10px 0" }}>{crop.cropName}</h3>
          <p style={{ color: "#555" }}>Farmer: {crop.farmerName}</p>
          <p style={{ color: "#777" }}>Location: {crop.location}</p>
          <p style={{ color: crop.verified ? "green" : "red" }}>
            Verified: {crop.verified ? "True" : "False"}
          </p>
          <button
            onClick={() => handleBuy(crop.id)}
            style={{
              margin: "5px",
              padding: "10px",
              backgroundColor: "#FFC107",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Buy
          </button>
        </div>
      ))}
    </div>
  );
};

export default Trade;
