// 'use strict'
// // pasted from here on down
// const config = require('../config')
// const store = require('../store')
//
// const index = function () {
//   return $.ajax({
//     url: config.apiUrl + '/books',
//     method: 'GET'
//   })
// }
// const test = function (data) {
//   console.log('data is ', data)
//   return $.ajax({
//     url: config.apiUrl + '/change-password/:id',
//     method: 'PATCH',
//     headers: {
//       contentType: 'application/json',
//       Authorization: 'Token token=' + store.user.token
//     },
//     // The update action expects data formatted as such: <-game api doc
//     data: +++object here+++
//   })
// }
