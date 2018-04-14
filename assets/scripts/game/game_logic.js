'use strict'

// const getFormFields = require(`../../../lib/get-form-fields`)

// const api = require('./api')
// const ui = require('./ui')

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
  showNextPlayer,
  getBoard,
  changeBoard,
  checkForWin,
  setNextPlayer,
  resetBoard,
  freeze,
  assignGamePieceToPlayer
}
