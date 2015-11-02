import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    error: false
  },

  model(params) {
    if (params.error) {
      throw params;
    }
  },

  actions: {
    error(error) {
      window.handleError(error);
      return false;
    }
  }
});
