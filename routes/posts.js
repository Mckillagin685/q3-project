'use strict';

const bcrypt = require('bcrypt-as-promised');
const boom = require('boom');
const express = require('express');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const { camelizeKeys } = require('humps');

const router = express.Router();

const authorize = function(req, res, next) {
  jwt.verify(req.cookies.token, process.env.JWT_KEY, (err, playload) => {
    if (err) {
      return next(boom.create(401, 'Unauthorized'));
    }

    req.claim = playload;

    next();
  });
};

router.get('/posts', (req, res, next) => {
    knex('posts')
      .orderBy('id')
      .then((posts) => {
        res.send(camelizeKeys(posts))
      })
      .catch((err) => {
        next(err);
      })
})

router.get('/posts/:id', (req, res, next) => {
  knex('posts')
    .where('thread_id', req.params.id)
    .then((posts) => {
      if (!posts) {
        return next();
      }
      res.send(camelizeKeys(posts))
    })
    .catch((err) => {
      next(err);
    })
})

router.get('/post/:id', (req, res, next) => {
  knex('posts')
    .where('id', req.params.id)
    .then((posts) => {
      if (!posts) {
        return next();
      }
      res.send(camelizeKeys(posts))
    })
    .catch((err) => {
      next(err);
    })
})

router.post('/posts', authorize, (req, res, next) => {

  const newPost = {title: req.body.title, user_id: req.claim.id, thread_id: req.body.thread_id}

  if(!newPost.title || !newPost.title.trim()){
    return next(boom.create(400, 'Title must not be blank'));
  }

  if(!newPost.user_id){
    return next(boom.create(400, 'User Must be Logged in'))
  }

  if(!newPost.thread_id || !newPost.thread_id.trim()){
    return next(boom.create(400, 'Missing: Thread ID. Must post within a Thread'))
  }

  knex('users')
    .insert(newPost, '*')
    .catch((err) => {
      next(err)
    })

    res.send('Success')
})

module.exports = router;