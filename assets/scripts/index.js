'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const gameApi = require('./auth/events')
// const exampleEvents = require('./examples/events')

$(() => {
  gameApi.addHandlers()
  // authEvents.addHandlers()
})

const gameLogic = require('./auth/gameLogic')
//
// $(() => {
//   gameLogic.addHandlers()
// })

// const box = $('.box')
//
// $('box').on('click', function (event) {
//   event.preventDefault()
//
//   console.log('index You clicked me!', event.target)
// })
module.exports = {
  gameLogic
}
