'use strict';

require('angular');
const firebase = require('firebase');

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDv7owf1d-1CDwJjWsKAKwMhBfR2tWGPfo",
    authDomain: "file-share-b51fd.firebaseapp.com",
    databaseURL: "https://file-share-b51fd.firebaseio.com",
    storageBucket: "file-share-b51fd.appspot.com",
  };
  firebase.initializeApp(config);

const postKey = firebase.database().ref().child('posts').push().key;
firebase.database().ref().update({
  [`/posts/${postKey}`]: {
    body: 'hello world'
  }
}).then(res => console.log('post created', res), err => console.error('could not create post', err));

const restangular = require('restangular');
const nguiRoute = require('angular-ui-router');
console.log('Hello world');

