module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: { 
      filename: './database/auth.db3' 
    },

    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    
    migrations: {
      directory: './database/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { 
      directory: './database/seeds' 
    },
  },

  testing: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: { 
      filename: './database/test.db3' 
    },

    migrations: {
      directory: './database/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { 
      directory: './database/seeds' 
    },
  },

  production: {
    client: 'pg',
    useNullAsDefault: true,
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './database/migrations'
    },
    seeds: { 
      directory: './database/seeds' 
    },
  },
};
