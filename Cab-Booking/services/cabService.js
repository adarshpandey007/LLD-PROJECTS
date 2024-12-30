const Cab = require("../models/cabModel");

const cabs = {}; // In-memory storage

const addCab = (cabData) => {
    let cabId = `cab-${Date.now()}`;
    while(cabs[cabId]){
        cabId = `cab-${Date.now()}`;
    }
    const cab = new Cab(cabId,cabData.type, cabData.location.x,cabData.location.y,cabData.carno);
    cabs[cabId] = cab;
    return cab;
};

const getAvailableCabs = (location) => {
  let closestCab = null;
  let minDistance = Infinity;

  Object.values(cabs).forEach((cab) => {
    if (cab.isAvailable) {
      const distance = Math.sqrt(
        Math.pow(cab.location.locX - location.x, 2) + Math.pow(cab.location.locY - location.y, 2)
      );
      if (distance < minDistance) {
        closestCab = cab;
        minDistance = distance;
      }
    }
  });

  return closestCab;
};

const updateCabLocation = (id, location) => {
  if (!cabs[id]) throw new Error("Cab not found");
  cabs[id].location = location;
};

const toggleCabAvailability = (id, isAvailable) => {
  if (!cabs[id]) throw new Error("Cab not found");
  cabs[id].isAvailable = isAvailable;
};

const getAllCabs=()=>{
    return Object.values(cabs);
};

module.exports = { addCab, getAvailableCabs, updateCabLocation, toggleCabAvailability, getAllCabs };
