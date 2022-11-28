const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET students
router.get('/', (req, res) => {
    // Get all of the students in the table
    const sqlText = `SELECT * FROM profile ORDER BY id ASC`;
    pool.query(sqlText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error in GET making database query from profile ${sqlText}`, error);
            res.sendStatus(500);
        });
});

// GET /students/37
router.get('/:id', (req, res) => {
    const id = req.params.id;
    // Get all of the students in the table
    const sqlText = `
        SELECT * FROM profile 
        WHERE id = $1
        ORDER BY id ASC;
    `;
    const sqlParams = [id]; // $1 = req.params.id
    pool.query(sqlText, sqlParams)
        .then((result) => {
            res.send(result.rows[0]);   
        })
        .catch((error) => {
            console.log(`Error in GET id making database query from profile ${sqlText}`, error);
            res.sendStatus(500);
        });
});

router.put('/:id', (req, res) => {
    // Update this single student
    const idToUpdate = req.params.id;
    const sqlText = `UPDATE profile SET profile_name = $1 WHERE id = $2`;
    pool.query(sqlText, [req.body.github_name, idToUpdate])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error in PUT making database query from profile ${sqlText}`, error);
            res.sendStatus(500);
        });
});

// POST students
router.post('/', (req, res) => {
    console.log(req.body);
    const newProfile = req.body.profile_name;
    const sqlText = `INSERT INTO profile (profile_name) VALUES ($1)`;

    pool.query(sqlText, [newProfile])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error in POST making database query from profile  ${sqlText}`, error);
            res.sendStatus(500);
        });
});

module.exports = router;