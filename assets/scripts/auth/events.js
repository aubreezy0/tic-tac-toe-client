'use strict'
const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
// const ui = require('./ui')
const onCreateExample = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('hi' + data)
  // api.createExample(data)
  //   .then(ui.createExampleSuccess)
  //   .catch(ui.createExampleFailure)
}

const addHandlers = () => {
  $('#create-example').on('submit', onCreateExample)
}

module.exports = {
  addHandlers
}
