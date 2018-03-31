'use strict'

const signInSuccess = function () {
  $('#message').text('Successfully signed in')
  $('#message').css('background-color', 'green')
}

const signInFailure = function () {
  $('#message').text('You failed')
  $('#message').css('background-color', 'red')
}

const changePasswordSuccess = function () {
  $('#message').text('Successfully changed password')
  $('#message').css('background-color', 'green')
}

const changePasswordFailure = function () {
  $('#message').text('Password not changed')
  $('#message').css('background-color', 'red')
}

module.exports = {
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure
}

// api.changePassword(data)
//   .then(ui.changePasswordSuccess)
//   .catch(ui.changePasswordFailure)
