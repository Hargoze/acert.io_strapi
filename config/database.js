require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'mongoose',
        settings: {
          client: 'mongo',
          uri: `mongodb://admin:${process.env.MONGO_PWD}@cluster0-shard-00-00.u3axo.mongodb.net:27017,cluster0-shard-00-01.u3axo.mongodb.net:27017,cluster0-shard-00-02.u3axo.mongodb.net:27017/test?ssl=true&replicaSet=atlas-g14h2b-shard-0&authSource=admin&retryWrites=true&w=majority`
        },
        options: {
          "ssl": true
        },
      },
    },
  });