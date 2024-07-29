import React, { useState, useEffect } from "react";
import getInitialCrops from "../utils/Crops";

const CropCard = ({
  image,
  cropName,
  farmerName,
  location,
  verified,
  onVerify,
  onDownload,
}) => (
  <div
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
      src={image}
      alt="Crop"
      style={{ width: "100%", borderRadius: "8px" }}
    />
    <h3 style={{ margin: "10px 0" }}>{cropName}</h3>
    <p style={{ color: "#555" }}>Farmer: {farmerName}</p>
    <p style={{ color: "#777" }}>Location: {location}</p>
    <p style={{ color: verified ? "green" : "red" }}>
      Verified: {verified ? "True" : "False"}
    </p>
    <button
      onClick={onVerify}
      style={{
        margin: "5px",
        padding: "10px",
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      Verify
    </button>
    <button
      onClick={onDownload}
      style={{
        margin: "5px",
        padding: "10px",
        backgroundColor: "#2196F3",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      Download
    </button>
  </div>
);

const Inspect = () => {
  const [crops, setCrops] = useState(getInitialCrops);

  useEffect(() => {
    // Save crops to localStorage whenever they change
    localStorage.setItem("crops", JSON.stringify(crops));
  }, [crops]);

  const handleVerify = (id) => {
    setCrops(
      crops.map((crop) => (crop.id === id ? { ...crop, verified: true } : crop))
    );
  };

  const handleDownload = (image) => {
    const link = document.createElement("a");
    link.href = image;
    link.download = image.split("/").pop();
    link.click();
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
        <CropCard
          key={crop.id}
          image={crop.image}
          cropName={crop.cropName}
          farmerName={crop.farmerName}
          location={crop.location}
          verified={crop.verified}
          onVerify={() => handleVerify(crop.id)}
          onDownload={() => handleDownload(crop.image)}
        />
      ))}
    </div>
  );
};

export default Inspect;
