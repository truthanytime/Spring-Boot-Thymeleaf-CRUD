var app = angular.module('myApp', []);

app.controller('TutorialFormController', function ($scope, $http) {
    $scope.pageTitle = "Add Tutorial";
    $scope.tutorial = {
        id: "",
        title: "",
        description: "",
        level: "",
        published: false
    };

    $scope.saveTutorial = function () {
        if ($scope.tutorialForm.$valid) {

            $http.post('/tutorials/save', $scope.tutorial)
                .then(function (response) {
                    // Handle success
                    console.log("Tutorial saved successfully:", response.data);
                    window.location.href = '/tutorials';
                })
                .catch(function (error) {
                    // Handle error
                    console.log("Error saving tutorial:", error.data);
                });
        }
    };

    $scope.cancel = function () {
        window.location.href = '/tutorials';
    };
});
