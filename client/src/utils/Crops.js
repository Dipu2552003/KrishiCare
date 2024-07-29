// crop.js
const getInitialCrops = () => {
  const storedCrops = localStorage.getItem("crops");
  return storedCrops
    ? JSON.parse(storedCrops)
    : [
        {
          id: 1,
          image: "images/crop1.PNG",
          farmerName: "John Doe",
          cropName: "Wheat",
          location: "Farmville",
          verified: false,
          price: "50",
        },
        {
          id: 2,
          image: "images/crop2.PNG",
          farmerName: "John Doe",
          cropName: "Wheat",
          location: "Farmville",
          verified: false,
          price: "60",
        },
      ];
};

export default getInitialCrops;
