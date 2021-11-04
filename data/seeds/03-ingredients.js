exports.seed = function (knex, Promise) {
  return knex("ingredients").insert([
    { ingredient_name: "Egg" },
    { ingredient_name: "Flour" },
    { ingredient_name: "Water" },
  ]);
};
