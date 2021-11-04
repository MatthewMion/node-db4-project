exports.seed = function (knex, Promise) {
  return knex("recipes").insert([
    { recipe_name: "Cake", created_on: "12:00" },
    { recipe_name: "Strudel", created_on: "14:00" },
  ]);
};
