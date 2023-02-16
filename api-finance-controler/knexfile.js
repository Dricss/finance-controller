// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      port: 5432,
      user: "postgres",
      password: "root",
      database: "postgres",
    },
    migrations: {
      directory: "./data/migrations",
    },
  },
};

// module.exports = {
//   development: {
//     client: "pg",
//     connection: {
//       host: "localhost:5432",
//       user: "myuser",
//       password: "mypassword",
//       database: "mydb",
//     },
//     migrations: {
//       directory: "./data/migrations",
//     },
//   },

//   staging: {
//     client: "pg",
//     connection: {
//       host: "localhost:5432",
//       user: "myuser",
//       password: "mypassword",
//       database: "mydb",
//     },
//     migrations: {
//       directory: "./data/migrations",
//     },
//   },

//   production: {
//     client: "pg",
//     connection: {
//       host: "localhost:5432",
//       user: "myuser",
//       password: "mypassword",
//       database: "mydb",
//     },
//     migrations: {
//       directory: "./data/migrations",
//     },
//   },
// };
