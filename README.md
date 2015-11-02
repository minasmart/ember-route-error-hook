# Test-error-hook

This is a test repo demonstrating that testing the error hook on an ember route
is broken in ember 2.1.0.

When an error is thrown and caught in ember@2.0.2, the tests pass.

When an error is thrown and caught in ember@2.1.0, the tests fail due to an
extra assertion being thrown.

Branches are named after ember versions. Tests can be seen running on Circle CI:

- [v2.0.2](https://circleci.com/gh/minasmart/ember-route-error-hook/tree/v2.0.2)
- [v2.1.0](https://circleci.com/gh/minasmart/ember-route-error-hook/tree/v2.1.0)
