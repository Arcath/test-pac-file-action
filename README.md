# Test Pac File Action

Runs [PAC File Tester](https://github.com/Arcath/pac-file-tester) as an action to allow the testing of PAC files from GitHub Actions.

## Example

```yaml
    - name: 🧪 Test PAC File
      uses: Arcath/test-pac-file-action@v1
      with:
        file: ./_site/proxy.pac
        url: https://www.google.com
        result: DIRECT
```

Where `file` is the path to the PAC file on disk, `url` is the URL to test the file with and `result` is the expected result. If the actual result does not match `result` the action will fail.