'use strict';

const bcrypt = require('bcrypt-as-promised');
const boom = require('boom');
const express = require('express');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const { camelizeKeys } = require('humps');

const router = express.Router();

router.get('/comments', (req, res, next) => {
    knex('comments')
      .orderBy('id')
      .then((comments) => {
        res.send(camelizeKeys(comments))
      })
      .catch((err) => {
        next(err);
      })
})

router.get('/comments/:id', (req, res, next) => {
  knex('comments')
    .where('post_id', req.params.id)
    .then((comments) => {
      if (!comments) {
        return next();
      }
      res.send(camelizeKeys(comments))
    })
    .catch((err) => {
      next(err);
    })
})

module.exports = router;