(function () {
"use strict";

angular.module('public')
    .controller('SignUpController', SignUpController);

SignUpController.$inject = ['UserService', 'MenuService'];
function SignUpController(UserService, MenuService) {
    this.user = {};
    this.saved = false;
    this.menuItemIsNotFound = false;

    this.submit = function() {
        self = this;
        MenuService.getMenuItem(self.user.favoriteDish).then(
            function (menuItem) {
                UserService.setUser(self.user);
                self.saved = true;
            },
            function (response) {
                self.menuItemIsNotFound = true;
            }
        );
    }
}


})();
