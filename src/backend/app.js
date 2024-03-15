import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';
import dotenv from 'dotenv';
import corsMiddleware from './middleware/cors';

dotenv.config();

const Pool = pg.Pool;

const app = express();
const PORT = 3030

app.use(corsMiddleware);

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.PORT_DB,
    ssl: {
        rejectUnauthorized: false,
      },
});

// const pool = new Pool({
//   user: process.env.DBTEST_USER,
//   host: process.env.DBTEST_HOST,
//   database: process.env.DBTEST_DATABASE,
//   password: process.env.DBTEST_PASSWORD,
//   dialect: process.env.DBTEST_DIALECT,
// });

pool.connect();

app.get('/restaurantes', async (req, res) => {
    try {
        const query = 'SELECT * FROM contatos;';
        const result = await pool.query(query);
        res.json(result.rows);
    } catch (error) {
      res.status(500).json({ message: "Erro ao listar restaurantes", error: error.message });
    }
});

app.post('/restaurantes', async (req, res) => {
    const { nome, phone, familia } = req.body;

    try{
        const query = 'INSERT INTO restaurantes (nome, delivery, culinaria) VALUES ($1, $2, $3) RETURNING *;';
        values = [nome, delivery, culinaria];

        const result = await pool.query(query, values);
        res.json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ message: "Erro ao enviar restaurante", error: error.message });
    }
});


app.listen(PORT, () => {
    console.log(`Servidor disponível em: http://localhost:${PORT}`);
});