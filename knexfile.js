// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres:localhost://cfpeople'
  },


  production: {
    client: 'pg',
    connection: porcess.env.DATABASE_URL + "?ssl=true"
  }

};
