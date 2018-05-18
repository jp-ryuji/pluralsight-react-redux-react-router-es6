### Test plans
- What
  - React component and Redux
- How
  - Mocha with Expect
- Where
  - In-memory DOM via JSDOM
- Helper
  - Enzyme

- Testing Thunks
  - Mock two things:
    - Store (redux-mock-store)
    - HTTP calls (nock)
      > We don't need nock this time because we're already using a mock API that doesn't invoke actual HTTP calls.

### Getting Started

1. Install packages
    ```
    $ yarn install
    ```

2. Start local server
    ```
    $ yarn start

    ## with silence
    $ yarn start
    ```

### Run Specs (Tests)

```
$ yarn test

## with watch
$ yarn run test --watch
```
