const core = require('@actions/core')
const testPacFile = require('./lib/test-pac-file')

async function run() {
  try {
    const file = core.getInput('file')
    const url = core.getInput('url')
    const expectedResult = core.getInput('result')
    core.info(`Testing ${file}`)

    const result = testPacFile({file, url})

    core.setOutput('result', result)

    if (expectedResult !== result) {
      throw new Error(
        `PAC File test failed, got "${result}", expected "${expectedResult}"`
      )
    }
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
