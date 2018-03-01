var myApp = angular.module('myApp');

myApp.controller('HomeController', ['$scope', '$timeout', function($scope, $timeout) {
    // Texts on header background.
    $scope.brandName = 'ValeCharging';
    $scope.serviceArea = 'Bay Area only';
    
    $scope.title = 'Door to Door Valet Charging';
    $scope.price = 'Only $8';
    $scope.slogan = 'Pick up and drop your EV fully charged at your home.';
    $scope.contact_message = 'Call or text to make an appointment';
    $scope.contact_number = '310-993-5426';
    
    // Texts for grid items.
    $scope.grid_item_title_1 = 'Pick up car & keys';
    $scope.grid_item_message_1 = 'Pick up car & keys at your booked time slot at your home. Let us know your assigned parking space to park after charging or we text you location of your car near your home next morning.';
    
    $scope.grid_item_title_2 = 'Sign aggreement';
    $scope.grid_item_message_2 = 'Sign & get our company\'s guarantee paperwork, and pay $8.';
    
    $scope.grid_item_title_3 = 'Get your car back';
    $scope.grid_item_message_3 = 'Your car will be parked at assigned space or near your home by 6AM next morning. Key placed insided your mail box or sealed envelope in front of your door.';
    
}]);
