const core = require('@actions/core')
const testPacFile = require('./lib/test-pac-file')

async function run() {
  try {
    const file = core.getInput('file')
    core.info(`Testing ${test}`)

    const result = testPacFile({file})

    core.setOutput('result', result)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
