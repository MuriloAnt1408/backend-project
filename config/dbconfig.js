const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; // URI de conexão com o MongoDB
const dbName = 'meuBancoDeDados'; // Nome do banco de dados

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let db;

async function connectDB() {
  try {
    await client.connect();
    console.log('Conectado ao banco de dados');
    db = client.db(dbName);
  } catch (err) {
    console.error('Erro ao conectar ao banco de dados', err);
  }
}

function getDB() {
  return db;
}

module.exports = { connectDB, getDB };