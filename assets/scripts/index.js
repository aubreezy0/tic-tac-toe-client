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
//  exampleEvents.addHandlers()


$(() => {
  gameApi.addHandlers()
})
