const core = require('@actions/core')
const testPacFile = require('./lib/test-pac-file')

async function run() {
  try {
    const file = core.getInput('file')
    const url = core.getInput('url')
    const expectedResult = core.getInput('result')
    core.info(`Testing ${file}`)

    const result = await testPacFile({file, url})

    core.debug(`Result: ${result}`)

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
