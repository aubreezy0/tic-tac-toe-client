'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').delay(2000).fadeOut(150)
  $('#message').text('Signed up successfully. Please sign in!')
  $('#message').css('background-color', 'green')
  $('.sign-up-show').addClass('hidden')
  console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = function (error) {
  $('#message').delay(2000).fadeOut(150)
  $('#message').text('Error on sign up')
  $('#message').css('background-color', 'red')
  console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (data) {
  $('#message').delay(2000).fadeOut(150)
  $('#message').text('Successfully signed in')
  $('#message').css('background-color', 'green')
  $('.hiding-board').removeClass('hidden')
  $('.table-wrapper').addClass('noclick')
  $('.sign-in-footer').removeClass('hidden')
  $('.sign-in-show').delay(2000).addClass('hidden')
  $('.sign-up-show').addClass('hidden')
  console.log('signInSuccess ran. Data is :', data)
  store.user = data.user
}

const signInFailure = function (error) {
  $('#message').delay(2000).fadeOut(150)
  $('#message').text('You failed')
  $('#message').css('background-color', 'red')
  console.error('signInFailure ran. Error is :', error)
}

const signOutSuccess = function (data) {
  $('#message').delay(2000).fadeOut(150)
  $('#message').text('Signed out successfully')
  $('#message').css('background-color', 'green')
  // $('.hiding-board').addClass('hidden')
  // $('.sign-in-footer').addClass('hidden')
  // $('.sign-in-show').removeClass('hidden')
  // $('.sign-up-show').removeClass('hidden')
  console.log('signOutSuccess ran and was a success!!')
  store.user = null
  location.reload()
}

const signOutFailure = function (error) {
  $('#message').delay(2000).fadeOut(150)
  $('#message').text('Error on sign out')
  $('#message').css('background-color', 'red')
  console.error('signOutFailure ran. Error is :', error)
}

const changePasswordSuccess = function (data) {
  $('#message-footer').delay(2000).fadeOut(150)
  $('#message-footer').text('Successfully changed password')
  $('#message-footer').css('background-color', 'green')
  console.log('changePasswordSuccess ran!')
}

const changePasswordFailure = function (error) {
  $('#message').delay(2000).fadeOut(150)
  $('#message').text('Password not changed')
  $('#message').css('background-color', 'red')
  console.error('changePasswordFailure ran. Error is :', error)
}

const createGameSuccess = function (data) {
  $('#message').delay(2000).fadeOut(150)
  $('#message').text('You created a new game')
  $('#message').css('background-color', 'green')
  $('.table-wrapper').removeClass('noclick')
  $('.btn-fun').removeClass('noclick')
  console.log('createGameSuccess ran', data)
  store.game = data.game
}

const createGameFailure = function (error) {
  $('#message').delay(2000).fadeOut(150)
  $('#message').text('No new game for you.')
  $('#message').css('background-color', 'red')
  console.error('createGameFailure ran. Error is :', error)
}

const showGameSuccess = function (data) {
  $('#message-fun').delay(2000).fadeOut(150)
  $('#message-fun').text('You are showing great game success, ')
  $('#message-fun').append(data.games.length)
  $('#message-fun').css('background-color', 'green')
  console.log('showGameSuccess ran', data)
  store.game = data.game
}

const showGameFailure = function (error) {
  $('#message').delay(2000).fadeOut(150)
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
