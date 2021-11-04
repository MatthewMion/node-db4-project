const db = require("../data/db-config.js");

async function getRecipeById(recipe_id) {
  const response = await db("recipes as r")
    .leftJoin("steps as st", "r.recipe_id", "st.recipe_id")
    .leftJoin("step_ingredients as si", "si.step_id", "st.step_id")
    .leftJoin("ingredients as i", "i.ingredient_id", "si.ingredient_id")
    .where("r.recipe_id", recipe_id);
  //   return response;

  const finalResult = {
    recipe_id: response[0].recipe_id,
    recipe_name: response[0].recipe_name,
    created_on: response[0].created_on,
    steps: response[0].step_id
      ? response.map((res) => ({
          step_id: res.step_id,
          step_number: res.step_number,
          step_instructions: res.step_instructions,
          ingredients: response[0].quantity_id
            ? response.map((res) => ({
                ingredient_id: res.ingredient_id,
                ingredient_name: res.ingredient_name,
                quantity: res.quantity,
              }))
            : [],
        }))
      : [],
  };
  return finalResult;
}

module.exports = { getRecipeById };
