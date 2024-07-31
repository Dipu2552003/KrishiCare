import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const SellCrop = () => {
  const [crop, setCrop] = useState({
    id: "",
    image: "",
    farmerName: "",
    cropName: "",
    location: "",
    verified: false,
    price: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [crops, setCrops] = useState([]);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate a unique ID for the crop
    const cropId = new Date().getTime();
    const cropData = { ...crop, id: cropId };

    if (imageFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        cropData.image = reader.result;

        // Store crop data in cookies
        Cookies.set(`crop_${cropId}`, JSON.stringify(cropData), { expires: 7 });
        console.log("Cookie set for crop:", cropData); // Log crop data being set

        updateCrops();
      };
      reader.readAsDataURL(imageFile);
    } else {
      Cookies.set(`crop_${cropId}`, JSON.stringify(cropData), { expires: 7 });
      console.log("Cookie set for crop:", cropData); // Log crop data being set
      updateCrops();
    }

    // Clear the form
    setCrop({
      id: "",
      image: "",
      farmerName: "",
      cropName: "",
      location: "",
      verified: false,
      price: "",
    });
    setImageFile(null);

    alert("Crop information saved successfully!");
  };

  // Function to handle image file change
  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  // Function to update crops from cookies
  const updateCrops = () => {
    const allCrops = [];
    let i = 1;
    let cropData = Cookies.get(`crop_${i}`);
    while (cropData) {
      allCrops.push(JSON.parse(cropData));
      console.log(`Loaded crop ${i}:`, JSON.parse(cropData)); // Log each loaded crop
      i++;
      cropData = Cookies.get(`crop_${i}`);
    }
    setCrops(allCrops);
    console.log("Crops updated:", allCrops); // Log crops when updated
  };

  // Load crops on component mount
  useEffect(() => {
    updateCrops();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Sell Your Crop</h2>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label className="block text-gray-700">Farmer Name:</label>
          <input
            type="text"
            value={crop.farmerName}
            onChange={(e) => setCrop({ ...crop, farmerName: e.target.value })}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Crop Name:</label>
          <input
            type="text"
            value={crop.cropName}
            onChange={(e) => setCrop({ ...crop, cropName: e.target.value })}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Location:</label>
          <input
            type="text"
            value={crop.location}
            onChange={(e) => setCrop({ ...crop, location: e.target.value })}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Price ($):</label>
          <input
            type="number"
            value={crop.price}
            onChange={(e) => setCrop({ ...crop, price: e.target.value })}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Upload Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      <h2 className="text-2xl font-bold mb-4">Available Crops</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {crops.length > 0 ? (
          crops.map((crop) => (
            <div
              key={crop.id}
              className="border border-gray-300 rounded-lg p-4 shadow-md"
            >
              {crop.image && (
                <img
                  src={crop.image}
                  alt={crop.cropName}
                  className="w-full h-48 object-cover mb-4 rounded-md"
                />
              )}
              <h3 className="text-xl font-semibold mb-2">{crop.cropName}</h3>
              <p className="text-gray-700">Farmer: {crop.farmerName}</p>
              <p className="text-gray-700">Location: {crop.location}</p>
              <p className="text-gray-700">Price: ${crop.price}</p>
              <p className="text-gray-700">
                Verified: {crop.verified ? "Yes" : "No"}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-700">No crops available.</p>
        )}
      </div>
    </div>
  );
};

export default SellCrop;
