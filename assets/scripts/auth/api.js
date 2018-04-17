'use strict'
// pasted from here on down
const config = require('../config')
const store = require('../store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
    // data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
    // data: data
  })
}

const signOut = function (data) {
  console.log('signOut store.user is ', store.user)
  return $.ajax({
    url: config.apiUrl + `/sign-out/${
      store.user.id
    }`,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const changePassword = function (data) {
  console.log('data is ', data)
  return $.ajax({
    url: config.apiUrl + '/change-password/:id',
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const newGame = function (data) {
//  console.log('data is ', store.game)
  $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.game.token}`
    },
    store.game = data.game
    data
  })
}



//   $.ajax({
//     url: config.apiUrl + '/games',
//     method: 'POST',
//     headers: {
//       // contentType: 'application/json',
//       Authorization: 'Token token=' + store.game.token
//     },
//     data
//   })
// }

// .then(function (data) {
//   console.log('after create, data is', data)  //   store.game = data.game  //   ui.displayBoard()
//   $('#message').text('')
// })
// }
module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  newGame
}
