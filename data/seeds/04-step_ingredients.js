exports.seed = function (knex, Promise) {
  return knex("step_ingredients").insert([
    { quantity: "5", step_id: "1", ingredient_id: "1" },
    { quantity: "4", step_id: "2", ingredient_id: "2" },
    { quantity: "3", step_id: "3", ingredient_id: "3" },
    { quantity: "3", step_id: "4", ingredient_id: "3" },
  ]);
};
