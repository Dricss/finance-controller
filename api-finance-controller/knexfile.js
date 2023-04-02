// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

// module.exports = {
//   development: {
//     client: "pg",
//     connection: {
//       host: "finance-controller.cyqzlz14orsy.us-east-2.rds.amazonaws.com",
//       port: 5432,
//       user: "financeControler",
//       password: "Financ3Control3r_1998",
//       database: "financeControllerDb",
//     },
//     migrations: {
//       directory: "./data/migrations",
//     },
//   },
// };

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      port: 5432,
      user: "myuser",
      password: "mypassword",
      database: "mydb",
    },
    migrations: {
      directory: "./data/migrations",
    },
  },

  staging: {
    client: "pg",
    connection: {
      host: "localhost:5432",
      port: 5432,
      user: "myuser",
      password: "mypassword",
      database: "mydb",
    },
    migrations: {
      directory: "./data/migrations",
    },
  },

  production: {
    client: "pg",
    connection: {
      host: "localhost:5432",
      port: 5432,
      user: "myuser",
      password: "mypassword",
      database: "mydb",
    },
    migrations: {
      directory: "./data/migrations",
    },
  },
};
