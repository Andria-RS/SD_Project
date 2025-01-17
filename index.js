const express =require("express");

const app = express();
const port = 8080;

const {Pool} = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'postgres_db',
    database: 'postgres',
    password: 'postgres',
    port: 5432,
});

app.get('/', (req,res) => {

    res.send("API Funcional !!");

});

app.use(express.json());

async function createGamesTable() {
    try{
        const query = `
        CREATE TABLE IF NOT EXISTS Games (
            id SERIAL PRIMARY KEY,
            title VARCHAR(350) NOT NULL,
            developers VARCHAR(350) NOT NULL,
            price NUMERIC(10, 2)
        );
        `;
        await pool.query(query);
        console.log('Games table created');
    }catch (err){
        console.error(err);
        console.error('Games table creation failed');
    }
}

createGamesTable();

// create new games
app.post('/Games', async (req, res) => {
    // Validate the incoming JSON data
    const { title, developers, price } = req.body;
    console.log(req.body);
    if (!title || !developers || !price) {
    return res.status(400).send('One of the title, or developers, or priceis missing in the data');
    }
    try {
    // try to send data to the database
    const query = `
    INSERT INTO Games (title, developers, price)
    VALUES ($1, $2, $3)
    RETURNING id;
    `;
    const values = [title, developers, price];
    const result = await pool.query(query, values);
    res.status(201).send({ message: 'New Games created', gamesId:
    result.rows[0].id });
    } catch (err) {
    console.error(err);
    res.status(500).send('some error has occured');
    }
    });

// get all
app.get('/Games', async (req, res) => {
    try{
        const query = `SELECT * FROM Games;`;
        const {rows} = await pool.query(query);
        res.status(200).json(rows); 
    }catch(err){
        console.error(err);
        res.status(500).send('failed');
    }
});

// update games
app.put('/Games/:id', async (req,res) => {
    try{
        const {id} = req.params;
        const {title, developers, price} = req.body;

        if(!title && !developers && !price){
            return res.status(400).send('provide a failed (title, developers or price) ');
        }
        const query = `
            UPDATE Games
            SET title = COALESCE($1, title),
                developers = COALESCE($2, developers),
                price = COALESCE($3, price)
            WHERE id = $4
            RETURNING *;
        `;
        const {rows} =await pool.query(query, [title, developers, price, id]);

        if (rows.length === 0){
            return res.status(404).send('Cannot find anything');
        }
        res.status(200).json(rows[0]);
    }catch(err){
        console.error(err);
        res.status(500).send('Some error has occured failed');
    }
});

// delete games
app.delete('/Games/:id', async (req,res) => {

    try{
        const {id} = req.params;
        const query = `DELETE FROM Games WHERE id = $1 RETURNING *;`;
        const {rows} = await pool.query(query,[id]);

        if(rows.length === 0){
            return res.status(404).send('we have not found the games');
        }
        
        res.status(200).json(rows[0]);
    }catch(err){
        console.error(err);
        res.status(500).send('some error has occured');
    }

});

app.listen(port, () => {

    console.log(`Example app listening on port ${port}`);

});

