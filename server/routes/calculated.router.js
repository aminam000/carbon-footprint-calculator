const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res)=> {
    const sqlQuery = `
    SELECT * FROM questions
    WHERE id = $1 
    ;
    `;
    const sqlValues = [true, req.user.id];
    console.log('sqlvalues', req.user.id)
    pool.query(sqlQuery, sqlValues)
    .then((dbRes)=> {
        res.send(dbRes.rows);
    })
    .catch((dbErr)=> {
        console.error('ERROR IN GET DB', dbErr);
        res.sendStatus(500);
    })

});


module.exports = router;