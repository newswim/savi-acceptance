# TODO: Running Chimp

- `npm install -g chimp`
- `npm run chimp-test`

Write any test code within `/tests` directory, using Node's built-in Assert lib.

## Test goals (aka TODO: write tests)

#### Acceptance tests

- Check that copyright-footer exists when viewing a facility scene
- Scene name should not be null

#### Harder to implement, but #goals

- Test project parsing against stub data.


### Testing a Meteor app

"Test mode" means none of the application code is eagerly loaded BUT _does_
eagerly load any file that matches `.spec[s].*` or `test[s].*`. Additionally,
it sets `Meteor.isTest = true` and starts up the test driver package.

`meteor test --full-app` -
`meteor test`            - ignores any files contained in `/tests`
