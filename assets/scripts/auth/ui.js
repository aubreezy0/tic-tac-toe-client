'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').css('background-color', 'green')
  console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = function (error) {
  $('#message').text('Error on sign up')
  $('#message').css('background-color', 'red')
  console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (data) {
  $('#message').text('Successfully signed in')
  $('#message').css('background-color', 'green')
  $('.hiding-board').removeClass('hidden')
  console.log('signInSuccess ran. Data is :', data)
  store.user = data.user
}

const signInFailure = function (error) {
  $('#message').text('You failed')
  $('#message').css('background-color', 'red')
  console.error('signInFailure ran. Error is :', error)
}

const signOutSuccess = function (data) {
  $('#message').text('Signed out successfully')
  $('#message').css('background-color', 'green')
  console.log('signOutSuccess ran and was a success!!')
  store.user = null
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out')
  $('#message').css('background-color', 'red')
  console.error('signOutFailure ran. Error is :', error)
}

const changePasswordSuccess = function (data) {
  $('#message').text('Successfully changed password')
  $('#message').css('background-color', 'green')
  console.log('signUpSuccess ran and nothing was returned!')
}

const changePasswordFailure = function (error) {
  $('#message').text('Password not changed')
  $('#message').css('background-color', 'red')
  console.error('changePasswordFailure ran. Error is :', error)
}

const createGameSuccess = function (data) {
  $('#message').text('You created a new game')
  $('#message').css('background-color', 'green')
  console.log('createGameSuccess ran', data)
  store.game = data.game
}

const createGameFailure = function (error) {
  $('#message').text('No new game for you.')
  $('#message').css('background-color', 'red')
  console.error('createGameFailure ran. Error is :', error)
}

const showGameSuccess = function (data) {
  $('#message-fun').delay(4000).fadeOut(150)
  $('#message-fun').text('You are showing great game success, ')
  $('#message-fun').append(data.games.length)
  $('#message-fun').css('background-color', 'green')
  console.log('showGameSuccess ran', data)
  store.game = data.game
}

const showGameFailure = function (error) {
  $('#message').text('You are not showing games.')
  $('#message').css('background-color', 'red')
  console.error('createGameFailure ran. Error is :', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  createGameSuccess,
  createGameFailure,
  showGameSuccess,
  showGameFailure
}
