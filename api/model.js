const db = require("../data/db-config.js");

async function getRecipeById(recipe_id) {
  const response = await db("recipes as r")
    .leftJoin("steps as st", "r.recipe_id", "st.recipe_id")
    .leftJoin("step_ingredients as si", "si.step_id", "st.step_id")
    .leftJoin("ingredients as i", "i.ingredient_id", "si.ingredient_id")
    .where("r.recipe_id", recipe_id);
  return response;
}

module.exports = { getRecipeById };
