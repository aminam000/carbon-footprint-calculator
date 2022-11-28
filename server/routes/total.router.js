const express = require('express');
const router = express.Router();
const pool =  require('../modules/pool');
const axios = require('axios');



router.post('/', (req, res)=> {
  const getTotal = req.body;
  console.log('post total', req.body);

  const sqlText = `
    INSERT INTO "total"
    ( "total")
    VALUES
    ( $2);
  `;


  const sqlValues = [
    // getTotal.user_id,
    getTotal.total
  ]



  pool.query(sqlText, sqlValues)
  
        .then((dbResult) => {
            console.log('posting total to database');
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('error posting total to database', error);
            res.sendStatus(500);
        })
})


module.exports = router;