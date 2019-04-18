// Update with your config settings.

localPgConnection = {
  host: 'localhost',
  database: 'hobbits',
  user: 'jay',
  password: 'pass'
}

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/hobbits.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/test.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: prodDbConnection,
    migrations: {
      directory:'./data/migration',
    },
    seed: {
      directory: './data/seeds'
    }
  }
};
