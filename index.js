const core = require('@actions/core')
const testPacFile = require('./lib/test-pac-file')

async function run() {
  try {
    const file = core.getInput('file')
    const url = core.getInput('url')
    core.info(`Testing ${file}`)

    const result = testPacFile({file, url})

    core.setOutput('result', result)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
