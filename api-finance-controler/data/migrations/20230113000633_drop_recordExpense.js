/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.dropTable("recordExpense");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) =>
  knex.schema.createTable("recordExpense", (table) => {
    // Adicione sua estrutura de tabela aqui
  });
