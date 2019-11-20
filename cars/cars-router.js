const express = require("express");
const router = express.Router();
const db = require('../data/db-config.js');

const errMessage = "failed to retrieve car(s)"

router.get('/', (req, res) => {
    db('cars')
      .then(cars=>{
          res.json(cars)
      })
      .catch(err => {
          res.status(500).json({
              message: errMessage,
              err
          })
      })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;

    db('cars').where({id}).first()
      .then(cars => {
          res.json(cars);
      })
      .catch(err => {
          res.status(500).json({
              message: errMessage,
              err
          })
      })
})

router.post('/', (req, res) => {
    const carsData = req.body;
    db('cars').insert(carsData)
      .then(ids => {
          console.log(ids)
        db('cars').where({ id: ids[0] })
          .then(newCarEntry => {
            res.status(201).json(newCarEntry);
          });
      })
      .catch(err => {
        console.log('POST error', err);
        res.status(500).json({ message: "Failed to store data", error: err });
      });
  });

module.exports = router;