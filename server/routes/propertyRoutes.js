const express = require("express");
const Property = require("../models/Property");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, async (req, res) => {
  try {
    const { title, description, location, price, guests, image } = req.body;

    const property = await Property.create({
      title,
      description,
      location,
      price,
      guests,
      image,
      owner: req.user.id,
    });

    res.status(201).json({
      message: "Property created successfully",
      property,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create property",
      error: error.message,
    });
  }
});
router.get("/", async (req, res) => {
  try {
    const properties = await Property.find().populate(
      "owner",
      "name email"
    );

    res.json(properties);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch properties",
      error: error.message,
    });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);

    if (!property) {
      return res.status(404).json({
        message: "Property not found",
      });
    }

    res.json(property);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch property",
      error: error.message,
    });
  }
});
module.exports = router;