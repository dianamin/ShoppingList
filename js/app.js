/**
 * Created by Diana.Ghinea on 7/21/2014.
 */
var app = angular.module('app', []);


var items = [
    {
        "product" : "Ciocolată",
        "quantity" : "2"
    },
    {
        "product" : "Pizza",
        "quantity" : "1"
    }
];

app.controller('Items', function($scope){
    $scope.items = items;
    $scope.addProduct = function() {
        $scope.items.push({
            "product": document.getElementById("product").value,
            "quantity": document.getElementById("quantity").value
        })
    }
});