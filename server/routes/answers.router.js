const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {

    const sqlQuery = `
    SELECT * FROM questions
    WHERE id= $1 
    `;

  const sqlValues = [req.user.id, false];
    pool
    .query(sqlQuery, sqlValues)
      .then( result => {
        res.send(result.rows);
      })
      .catch(err => {
        console.log('ERROR: Get all ', err);
        res.sendStatus(500)
      })
  
  });
  

router.post('/', (req,res)=> {
    console.log('in router POST', req.body)
    
    const sqlQuery = `
    INSERT INTO "answers"
    ("week", "user_id", "choice_id")
    VALUES
    ($1, $2, $3);
    `;

    const sqlValues = [
        req.user.id,
        req.body.week,
        req.body.choice,
        // false,
        // req.body.???
        
    ];
    pool.query(sqlQuery, sqlValues)
    .then((dbRes) => {
        console.log(dbRes.rows)
        res.sendStatus(201);
    })
    .catch((err)=> {
        console.error('error in POST DB', err)
        res.sendStatus(500)
    })
});

router.delete('/:id', (req, res)=> {
  console.log('data deleted id ', req.params.id);
  const sqlQuery = `
  DELETE FROM "answers"
  WHERE "id" =$1;
  `;
  const sqlValues = [req.params.id];
  pool
  .query(sqlQuery, sqlValues)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
     console.error('error in delete', err)
      res.sendStatus(500)
    })
});

router.put('/:id', (req, res)=> {
  console.log('put console ', req.params.id);
  
  const sqlQuery = `
  UPDATE  "answers" 
  SET choice_id = $1
  WHERE 
  `;
  const sqlParams = [true, req.params.id];
  pool
  .query(sqlQuery, sqlParams)
    .then(()=> {
      res.send(204);
    })
    .catch(err => {
     console.error('error in PUTT', err)
      res.sendStatus(500)
    })
})
module.exports = router;