(function() {
  'use strict'

  angular.module('secret')
    .service('SecretService', service)
  service.$inject = ['$http']

  function service($http) {

    this.$all = function() {
      return $http.get('/classifieds').then(all => all.data)
    }

    this.newSecret = function(newSecret) {
      $http.post('/classifieds', newSecret)
    }

    this.$hush = function(id) {
      return $http.delete(`/classifieds/${id}`)
    }
    this.$change = function(edit) {
      $http.patch(`/classifieds/${edit.id}/`, edit)
    }

  }
})();
