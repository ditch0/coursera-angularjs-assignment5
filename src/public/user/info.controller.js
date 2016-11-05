(function () {
"use strict";

angular.module('public')
    .controller('UserInfoController', UserInfoController);

UserInfoController.$inject = ['user', 'MenuService', 'ApiPath'];
function UserInfoController(user, MenuService, ApiPath) {
    this.basePath = ApiPath;
    this.user = user;
    if (user && user.favoriteDish) {
        self = this;
        MenuService.getMenuItem(user.favoriteDish).then(function(menuItem) {
            self.menuItem = menuItem;
        });
    }
}


})();
