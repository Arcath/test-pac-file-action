const {testPacFile, getFileContents} = require('pac-file-tester')

/**
 *
 *
 * @param {{file: string, url: string}} options
 */
module.exports = async ({file, url}) => {
  const content = await getFileContents(file)

  const result = await testPacFile(content, url)

  return result
}
