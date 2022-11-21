const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');

router.get('/:choices', (req, res)=> {
    const search = req.params.search
    console.log('searching for', search)

    axios({
        method: 'GET',
        data: insertdata

    }).then((response) => {
        console.log(response.data)
        res.send(response.data)
  }).catch(err => {
        console.log(err)
        res.sendStatus(500);
  });
})

module.exports = router;