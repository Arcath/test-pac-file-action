const testPacFile = require('./lib/test-pac-file')
const path = require('path')

test('it should take a file and return a result', async () => {
  let result = await testPacFile({
    file: `file://${path.join(__dirname, 'samples', 'direct.pac')}`,
    url: 'https://www.google.com'
  })

  expect(result).toBe('DIRECT')

  result = await testPacFile({
    file: 'file://./samples/proxy-google.pac',
    url: 'https://www.google.com'
  })

  expect(result).toBe('PROXY proxy.example.com:8080')
})
