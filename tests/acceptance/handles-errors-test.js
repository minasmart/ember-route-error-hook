import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'test-error-hook/tests/helpers/start-app';

const oldHandleError = window.handleError;

module('Acceptance | handles errors', {
  beforeEach() {

    this.application = startApp();
  },

  afterEach() {
    Ember.run(this.application, 'destroy');
    window.handleError = oldHandleError;
  }
});

test('it routes when no error is thrown', function(assert) {
  visit('/handles-errors');

  andThen(function() {
    assert.equal(currentURL(), '/handles-errors');
  });
});

test('visiting /handles-errors', function(assert) {
  assert.expect(1);
  const done = assert.async();

  window.handleError = function(error) {
    assert.ok(error.error);
    done();
  };

  visit('/handles-errors?error=true');
});
