(function () {
"use strict";


angular.module('common')
    .service('UserService', UserService);

function UserService() {
    this.user = null;
    this.getUser = function() {
        return this.user;
    };
    this.setUser = function(user) {
        this.user = user;
    };
}


})();