(function() {
  'use strict'

  angular.module('secret')
    .service('SecretService', service)
  service.$inject = ['$http']

  function service($http) {

    this.$all = function() {
      // console.log('inside SecretService');
      return $http.get('/api/classifieds').then((all) => {
        // console.log('all ', all);
        return all.data
      })
    }

    this.newSecret = function(newSecret) {
      console.log('SecretService post request = ', newSecret)
      $http.post('/api/classifieds', newSecret)
    }

    this.$hush = function(id) {
      return $http.delete(`/api/classifieds/${id}`)
    }

    this.$change = function(edit) {
      $http.patch(`/api/classifieds/${edit.id}/`, edit)
    }

  }
})();
