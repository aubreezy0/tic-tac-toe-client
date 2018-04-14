'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

// putting these all in until refactor
// const logic = require('./logic')
const store = require('../store')
// const ui = require('./ui')
const config = require('../config')
// end

const onSignUp = function (event) {
  event.preventDefault()
  console.log('sign up ran!')

  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('sign in ran!')

  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('sign out ran')

  const data = getFormFields(this)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('change password ran!')

  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onNewGame = function (event) {
  event.preventDefault()
  console.log('onNewGame ran!')

  const data = getFormFields(this)
  api.newGame(data)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#new-game').on('submit', onNewGame)
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
  // adding for now
  // logic,
  store,
  config,
  assignGamePieceToPlayer
}
// game play
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
