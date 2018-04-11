(function(){
  'use strict';

  angular.module('selfService')

	.constant("BASE_URL", "https://ec2-13-250-115-133.ap-southeast-1.compute.amazonaws.com/fineract-provider/api/v1")

	.constant('AUTH_EVENTS', {
		updateUser: 'update-user',
		notAuthorized: 'auth-not-authorized',
		notAuthenticated: 'auth-not-authenticated'
	})

	.constant('USER_ROLES', {
		user: 'USER'
	});

})();
