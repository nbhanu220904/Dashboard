import {
  generateBusinessData,
  regenerateHeadline,
} from "../models/businessModel.js";

export const postBusinessData = (req, res) => {
  const { name, location } = req.body;
  if (!name || !location)
    return res.status(400).json({ error: "name and location are required" });

  res.json(generateBusinessData(name, location));
};

export const getRegenerateHeadline = (req, res) => {
  const { name = "Your Business", location = "Your City" } = req.query;
  res.json(regenerateHeadline(name, location));
};
