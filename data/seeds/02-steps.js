exports.seed = function (knex, Promise) {
  return knex("steps").insert([
    { step_number: "1", step_instructions: "Bake", recipe_id: "1" },
    { step_number: "2", step_instructions: "Eat", recipe_id: "2" },
    { step_number: "1", step_instructions: "Bake", recipe_id: "2" },
    { step_number: "2", step_instructions: "Eat", recipe_id: "1" },
  ]);
};
