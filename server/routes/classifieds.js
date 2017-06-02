'use strict';
const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.route('/')
  .get((req, res) => {
    knex('classifieds').select()
      .then((all) => {
        res.send(all);
      });
  })


  .post((req, res) => {
    console.log('req.body ==== ', req.body)
    knex('classifieds').returning(['id', 'title', 'description', 'price', 'item_image'])
      .insert(req.body).then((item) => {
        res.send(item[0]);
        // console.log(item[0])
      });
  });

router.route('/:id')
  .patch((req, res) => {
    // console.log(req.params.id);
    knex('classifieds').where('id', req.params.id).returning(['id', 'title', 'description', 'price', 'item_image'])
      .update(req.body).then((item) => {
        res.send(item[0]);
      });
  })
  .delete((req, res) => {
    knex('classifieds').where('id', req.params.id).returning(['id', 'title', 'description', 'price', 'item_image'])
      .del().then((item) => {
        res.send(item[0]);
      });
  });
module.exports = router;
