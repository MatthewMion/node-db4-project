const express = require("express");
const helpers = require("./model");

const router = express.Router();

router.get("/:recipe_id", async (req, res, next) => {
  try {
    const result = await helpers.getRecipeById(req.params.recipe_id);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
