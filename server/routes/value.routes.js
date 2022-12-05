const express = require('express');
const router = express.Router();
const pool =  require('../modules/pool');
const axios = require('axios');


router.get('/', (req, res)=> {

  console.log('post values', req.body);

  const sqlText = `
    SELECT * FROM "values" LIMIT 1;


  `;
     // WHERE user_id = $1; 
  pool
  .query(sqlText)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get values', err);
      res.sendStatus(500)
    })

});


router.post('/', (req, res)=> {
  const getValues = req.body;
  console.log('post values', req.body);

  const sqlText = `
    INSERT INTO "values"
    ("user_id", "Residence", "Vehicle", "WorkTransport", "Distance", "Transport","Meals", "Takeout", "Shopping", "Flights")
    VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);
  `;


  const sqlValues = [
    req.user.id,
    getValues.residence,
    getValues.vehicle,
    getValues.worktrip,
    getValues.distance,
    getValues.othertrips,
    getValues.meat,
    getValues.takeout,
    getValues.shop,
    getValues.flights
  ]



  pool.query(sqlText, sqlValues)
  
        .then((dbResult) => {
            console.log('posting values to database');
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('error posting values to database', error);
            res.sendStatus(500);
        })
})

router.delete('/delete/:id', (req, res)=> {
  console.log('in delete values', req.body);

  const sqlText = `
    DELETE FROM "values" 
    where id = $1;


  `;

  const sqlValues = [req.params.id]
     // WHERE user_id = $1; 
  pool
  .query(sqlText, sqlValues)
    .then( result => {
      res.sendStatus(200);
    })
    .catch(err => {
      console.log('ERROR: in delete values', err);
      res.sendStatus(500)
    })
})



module.exports = router;