const express = require('express');
const router = express.Router();
const pool =  require('../modules/pool');
const axios = require('axios');



router.post('/', (req, res)=> {
  const getValues = req.body;
  console.log('post values', req.body);

  const sqlText = `
    INSERT INTO "values"
    ("Residence", "Vehicle", "WorkTransport", "Distance", "Transport","Meals", "Takeout", "Shopping", "Flights")
    VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8, $9);
  `;


  const sqlValues = [
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


module.exports = router;