const locationModel = require("../models/location.model");
const imageModel = require("../models/image.model");

const getAll = async (req, res, next) => {
  try {
    const [location] = await locationModel.findAll();
    res.status(200).json(location);
  } catch (error) {
    next(error);
  }
};

const getSpotZoneById = async (req, res, next) => {
  try {
    const locationId = req.params.location;

    // Utilisez le modèle location pour récupérer les données d'emplacement
    const locationData = await locationModel.getLocationById(locationId);

    // Utilisez le modèle image pour récupérer les données d'image
    const imageData = await imageModel.getImageByLocationId(locationId);

    // Vous avez maintenant les données d'emplacement et d'image
    res.json({ location: locationData, image: imageData });
  } catch (error) {
    console.error("Error in getSpotZoneById:", error);

    // Vérifiez le type d'erreur pour une gestion plus spécifique si nécessaire
    if (error.name === "NotFoundError") {
      res.status(404).json({ error: "Location not found" });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }

    next(error);
  }
};

module.exports = {
  getAll,
  getSpotZoneById,
};
