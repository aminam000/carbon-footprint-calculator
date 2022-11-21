const express = require('express');
const router = express.Router();
const choiceID = require('../modules/choices.data');



// PUT Route
router.put('/:choices', (req, res) => {
    console.log(req.params);
    const choiceId = req.params.id;
    for(const choiceItem of choices) {
        if(choices.id == choices) {
            choices.choice += choice;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    res.send(choices);
}); // END GET Route

module.exports = router;