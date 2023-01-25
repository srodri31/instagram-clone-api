const {
  DB_CA_CERT,
  DB_USERNAME,
  DB_DATABASE,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT
}  = process.env

module.exports = {
  development: {
    database: DB_DATABASE,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
        ca: DB_CA_CERT,
      },
    },
  },
  production: {
    database: DB_DATABASE,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
        ca: DB_CA_CERT,
      },
    },
  }
}