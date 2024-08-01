// crop.js
const getInitialCrops = () => {
  const storedCrops = localStorage.getItem("crops");
  return storedCrops
    ? JSON.parse(storedCrops)
    : [
        {
          id: 1,
          image: "images/crop1.PNG",
          farmerName: "Ravi Kumar",
          cropName: "Wheat",
          location: "Farmville",
          verified: false,
          price: "50",
        },
        {
          id: 2,
          image: "images/crop2.jpg",
          farmerName: "Ravi Kumar",
          cropName: "Tomato",
          location: "Pune",
          verified: false,
          price: "60",
        },
      ];
};

export default getInitialCrops;
