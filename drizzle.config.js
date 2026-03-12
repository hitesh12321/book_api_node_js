const {defineConfig} = require('drizzle-kit');
require("dotenv/config");
const config = defineConfig({
dialect : 'postgresql',
schema : "./model",
out : "./drizzle",
dbCredentials :{
    url : process.env.DATABASE_URL,
}
});

module.exports = config;