'use strict'

const store = require('../store')

const createGameSuccess = function (data) {
  $('#message').text('You started a new game!')
  $('#message').css('background-color', 'green')
  console.log('createGameSuccess ran. Data is :', data)
}

const createGameFailure = function (error) {
  $('#message').text('Error on create game')
  $('#message').css('background-color', 'red')
  console.error('createGameFailure ran. Error is :', error)
}

// const signInSuccess = function (data) {
//   $('#message').text('Successfully signed in')
//   $('#message').css('background-color', 'green')
//   console.log('signInSuccess ran. Data is :', data)
//   store.user = data.user
// }
//
// const signInFailure = function (error) {
//   $('#message').text('You failed')
//   $('#message').css('background-color', 'red')
//   console.error('signInFailure ran. Error is :', error)
// }
//
// const signOutSuccess = function (data) {
//   $('#message').text('Signed out successfully')
//   $('#message').css('background-color', 'green')
//   console.log('signOutSuccess ran and nothing was returned!')
//   store.user = null
// }
//
// const signOutFailure = function (error) {
//   $('#message').text('Error on sign out')
//   $('#message').css('background-color', 'red')
//   console.error('signOutFailure ran. Error is :', error)
// }
//
// const changePasswordSuccess = function (data) {
//   $('#message').text('Successfully changed password')
//   $('#message').css('background-color', 'green')
//   console.log('signUpSuccess ran and nothing was returned!')
// }
//
// const changePasswordFailure = function (error) {
//   $('#message').text('Password not changed')
//   $('#message').css('background-color', 'red')
//   console.error('changePasswordFailure ran. Error is :', error)
// }
//
// const newGameSuccess = function (data) {
//   $('#message').text('You created a new game')
//   $('#message').css('background-color', 'green')
//   console.log('newGameSuccess ran and nothing was returned!')
// }
//
// const newGameFailure = function (error) {
//   $('#message').text('No new game for you.')
//   $('#message').css('background-color', 'red')
//   console.error('newGameFailure ran. Error is :', error)
// }

// const clickSuccess = function (data) {
//   $('#message').text('You clicked it successfully!')
//   $('#message').css('background-color', 'green')
//   console.error('clickSuccess ran successfully. Here is more', data)
// }
//
// const clickFailure = function (error) {
//   $('#message').text('You clicked your hardest, but no.')
//   $('#message').css('background-color', 'red')
//   console.error('clickFailure ran. Error is :', error)
// }

module.exports = {
  createGameSuccess,
  createGameFailure
}

// api.changePassword(data)
//   .then(ui.changePasswordSuccess)
//   .catch(ui.changePasswordFailure)
