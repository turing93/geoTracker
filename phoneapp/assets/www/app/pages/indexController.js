define(['require'], function(require) {

    /**
     * Controller for index generated by Appery.io
     * @module index
     */

    function controller($scope, Apperyio) {
        /**
         * User controller functions
         */
        /**
         * @function init
         */
        $scope.init = function() {
            $scope.visionStatus = {};
            var config = {
                apiKey: "AIzaSyA4oBmptd_URAdnPDhcjzFf6NaRppJ1L6c",
                authDomain: "my-project-1508936009827.firebaseapp.com",
                databaseURL: "https://my-project-1508936009827.firebaseio.com",
                projectId: "my-project-1508936009827",
                storageBucket: "my-project-1508936009827.appspot.com",
                messagingSenderId: "520809038313"
            };
            firebase.initializeApp(config);
        };

        /**
         * user controller variables
         */
    }

    return ['$scope', 'Apperyio', controller];

});