'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  // console.log('sign up ran!')

  const data = getFormFields(this)
  document.getElementById('sign-up').reset()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  // console.log('sign in ran!')

  const data = getFormFields(this)
  document.getElementById('sign-in').reset()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
  freeze(table)
}

const onSignOut = function (event) {
  event.preventDefault()
  // console.log('sign out ran')

  const data = getFormFields(this)
  document.getElementById('sign-out').reset()
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  // console.log('change password ran!')

  const data = getFormFields(this)
  document.getElementById('change-password').reset()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onCreateGame = function (event) {
  event.preventDefault()
  // console.log('New game was yay created!')

  // const data = getFormFields(this)
  document.getElementById('create-game').reset()
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
  // console.log('api.createGame ran!')
}

const onShowGame = function (event) {
  event.preventDefault()
  // console.log('Your fun-counter is showing!')

  document.getElementById('show-game').reset()
  api.showGame()
    .then(ui.showGameSuccess)
    .catch(ui.showGameFailure)
  freeze(table)
  // console.log('api,showGame ran')
}

const onShowPassword = function (event) {
  event.preventDefault()
  $('#message').text('You bet you pushed it')
  $('#message').css('background-color', 'purple')
  $('.form-password').removeClass('hidden')
  $('.btn-password-hide').addClass('hidden')
  // console.log('onShowPassword ran')
  // console.log('pushing buttons!')
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#create-game').on('submit', onCreateGame)
  $('#show-game').on('submit', onShowGame)
  $('#btn-password').on('submit', onShowPassword)
}

// deleted module
let player = 1
const table = $('table')
const turn = $('.turn')
let td = $('td')

$('td').on('click', function () {
  td = $(this)
  // 1 if occupied, 0 if empty
  const board = getBoard(td)
  if (!board) { // is the sq occupied
    const gamePiece = assignGamePieceToPlayer(player)
    changeBoard(td, gamePiece) // not occupied add x/o
    if (checkForWin(table, gamePiece)) {
      $('.messages').html('Player ' + player + ', you\'re a winner, baby!')
      turn.html('')
      freeze(table)
    } else {
      $('.messages').html('')
      player = setNextPlayer(player)
      showNextPlayer(turn, player)
    }
  } else {
    $('.messages').html('This box is already checked.')
  }
})

$('.reset').on('click', function () {
  player = 1
  $('.messages').html('')
  resetBoard(table)
  showNextPlayer(turn, player)
})

function getBoard (td) {
  if (td.hasClass('cross') || td.hasClass('circle')) {
    return 1
  } else {
    return 0
  }
}

function changeBoard (td, gamePiece) {
  return td.addClass(gamePiece)
}

function assignGamePieceToPlayer (player) {
  if (player === 1) {
    return 'cross'
  } else {
    return 'circle'
  }
}

function setNextPlayer (player) {
  if (player === 1) {
    return 2
  } else {
    return 1
  }
}

function showNextPlayer (turn, player) {
  turn.html('Player turn : ' + player)
}

function checkForWin (table, gamePiece) {
  let won = 0
  if (table.find('#0').hasClass(gamePiece) && table.find('#1').hasClass(gamePiece) && table.find('#2').hasClass(gamePiece)) {
    won = 1
  } else if (table.find('#0').hasClass(gamePiece) && table.find('#3').hasClass(gamePiece) && table.find('#6').hasClass(gamePiece)) {
    won = 1
  } else if (table.find('#0').hasClass(gamePiece) && table.find('#4').hasClass(gamePiece) && table.find('#8').hasClass(gamePiece)) {
    won = 1
  } else if (table.find('#3').hasClass(gamePiece) && table.find('#4').hasClass(gamePiece) && table.find('#5').hasClass(gamePiece)) {
    won = 1
  } else if (table.find('#6').hasClass(gamePiece) && table.find('#7').hasClass(gamePiece) && table.find('#8').hasClass(gamePiece)) {
    won = 1
  } else if (table.find('#1').hasClass(gamePiece) && table.find('#4').hasClass(gamePiece) && table.find('#7').hasClass(gamePiece)) {
    won = 1
  } else if (table.find('#2').hasClass(gamePiece) && table.find('#5').hasClass(gamePiece) && table.find('#8').hasClass(gamePiece)) {
    won = 1
  } else if (table.find('#2').hasClass(gamePiece) && table.find('#4').hasClass(gamePiece) && table.find('#6').hasClass(gamePiece)) {
    won = 1
  }
  return won
}
// This is a draft of the tie function
// function checkForTie (table, gamePiece) {
//   let tie = 0
//   if (table.find('#0').hasClass(gamePiece) && table.find('#1').hasClass(gamePiece) && table.find('#2').hasClass(gamePiece) && table.find('#3').hasClass(gamePiece) && table.find('#4').hasClass(gamePiece) && table.find('#5').hasClass(gamePiece) && table.find('#6').hasClass(gamePiece) && table.find('#7').hasClass(gamePiece) && table.find('#8').hasClass(gamePiece)) {
//     tie = 1

function freeze (table) {
  table.find('td').each(function () {
    $(this).addClass('noclick')
  })
}

function resetBoard (table) {
  table.find('td').each(function () {
    $(this).removeClass('circle').removeClass('cross').removeClass('noclick')
  })
}

module.exports = {
  addHandlers,
  showNextPlayer,
  getBoard,
  changeBoard,
  checkForWin,
  setNextPlayer,
  resetBoard,
  freeze,
  assignGamePieceToPlayer
  // showPassword
}
