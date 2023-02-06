/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("recordExpense", function (table) {
    table.increments("id");
    table.string("expenseName");
    table.decimal("valor");
    table.date("monthReference");
    table.string("category");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return schema.dropTable("recordExpense");
};
