const Recipe = require("./model");

const checkRecipeId = async (req, res, next) => {
  try {
    const recipeId = await Recipe.getRecipeById(req.params.recipe_id);

    if (!recipeId) {
      res.status(404).json({ message: "Recipe with that ID not found" });
    } else {
      req.recipe_id = recipeId;
      next();
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { checkRecipeId };
