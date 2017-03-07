var app = angular.module('addApp', []);

app.controller('modifyCtrl', ['$scope', function($scope){
    $scope.tabelsData= [
        {'name':'rohit', 'dob':'15-august-1985', 'emailId':'rohit@rohit.com', 'phone':'9999999999', 'address':'Delhi Rohini', 'id':'0' },
        {'name':'aman', 'dob':'26-july-1975', 'emailId':'haryanat@hr.com', 'phone':'9874563210', 'address':'Haryana Sonepat', 'id':'1' },
        {'name':'devraj', 'dob':'27-march-1980', 'emailId':'punjab@punjab.com', 'phone':'7410258963', 'address':'Punjab AmritSar', 'id':'2' }
    ];
    
    $scope.editingData = {};
    
    for (var i = 0, length = $scope.tabelsData.length; i < length; i++) {
      $scope.editingData[$scope.tabelsData[i].id] = false;
    }


    $scope.modify = function(tableData){
        $scope.editingData[tableData.id] = true;
    };


    $scope.update = function(tableData){
        $scope.editingData[tableData.id] = false;
    };

}]);