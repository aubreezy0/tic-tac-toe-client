// 4/3 3:12. This is when things went crazy. If everything fails, roll back until this message disappears.
'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

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

$(function () {
  let player = 1
  const table = $('table')
  const messages = $('.messages')
  const turn = $('.turn')
  let td = $('td')
  showNextPlayer(turn, player)

  $('td').on('click', function () {
    td = $(this)
    const board = getBoard(td)
    if (!board) {
      const gamePiece = assignGamePieceToPlayer(player)
      changeBoard(td, gamePiece)
      if (checkForWin(table, gamePiece)) {
        messages.html('Player ' + player + ', you\'re a winnah, baby!')
        table.html(' ')
        turn.html('')
        // write function freeze table because
        // reset(table) worked
      } else {
        player = setNextPlayer(player)
        showNextPlayer(turn, player)
      }
    } else {
      messages.html('This box is already checked.')
    }
  })
  //
  // $('.freeze').on('click', function () {
  //   won === true
  //   freeze(table)
  // })

  $('.reset').on('click', function () {
    player = 1
    messages.html('')
    reset(table)
    showNextPlayer(turn, player)
  })
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
  } else if (table.find('#0').hasClass(gamePiece) && table.find('#3').hasClass(gamePiece) && table.find('#7').hasClass(gamePiece)) {
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
  } else if (table.find('#2').hasClass(gamePiece) && table.find('#4').hasClass(gamePiece) && table.find('#7').hasClass(gamePiece)) {
    won = 1
  }
  return won
}

// function freeze (table) {
//   table.find('td').each(function () {
//     $(this).addClass('noclick')
//   })
// }

function reset (table) {
  table.find('td').each(function () {
    $(this).removeClass('circle').removeClass('cross')
  })
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
}

module.exports = {
  addHandlers,
  showNextPlayer,
  getBoard,
  changeBoard,
  checkForWin,
  setNextPlayer,
  reset,
  // freeze,
  assignGamePieceToPlayer
}
