function FindProxyForURL(url, host) {
  if (shExpMatch(host, '*.google.com')) {
    return 'PROXY proxy.example.com:8080'
  }

  return '${DIRECT}'
}
