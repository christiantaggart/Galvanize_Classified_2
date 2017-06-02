(function() {
  'use strict'

  angular.module('secret', [])
    .component('secret', {
      templateUrl: '/spa/templates/secret.template.html',
      controller: controller
    })

  controller.$inject = ['SecretService']

  function controller(SecretService) {
    let vm = this
    vm.$onInit = onInit
    vm.$all = $all
    vm.$newSecret = $newSecret
    vm.$hush = $hush
    vm.$change = $change
    vm.$toggle = $toggle
    vm.secret = []

    function onInit() {
      return $all()
    }

    function $all() {
      SecretService.$all()
        .then((all) => {
          vm.secrets = all
        })
    }

    function $newSecret() {
      // console.log('vm.secret = ', vm.secret)
      SecretService.newSecret(vm.newSecret)
      delete vm.newSecret
    }



    function $hush(id) {
      SecretService.$hush(id.id)
    }

    function $toggle(secret, $index) {
      vm.secret[$index] = !vm.secret[$index]
      vm.changing = angular.copy(secret)
    }

    function $change(edit) {
      // console.log(secret.id);
      // console.log(vm.changing.id);
      SecretService.$change(vm.changing)
    }


  }
}());
