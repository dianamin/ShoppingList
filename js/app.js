/**
 * Created by Diana.Ghinea on 7/21/2014.
 */
var app = angular.module('app', []);

var  bought = [];

var nr = 2;

var items = [
    {
        "nr" : "1",
        "editBox": "no",
        "product" : "Ciocolată",
        "quantity" : "2",
        "bought" : "no",
        "removed" : "no"
    },
    {
        "nr" : "2",
        "editBox": "no",
        "product" : "Pizza",
        "quantity" : "1",
        "bought" : "no",
        "removed" : "no"
    }
];

app.controller('Items', function($scope){
    $scope.items = items;
    $scope.editBox = "no";
    $scope.editItem = "";
    $scope.actualItem = "";
    $scope.addProduct = function() {
        nr++;
        $scope.items.push({
            "nr" : String(nr),
            "product": document.getElementById("product").value,
            "quantity": document.getElementById("quantity").value
        })
    };
    $scope.buy = function(item) {
        item.bought = "yes";
    };
    $scope.remove = function(item) {
        item.removed = "yes";
    };
    $scope.openEdit = function(item) {
       item.editBox = "yes";
       $scope.editItem = item.product;
        console.log(item.product);
        $scope.actualItem = item.nr;
    }
    $scope.edit = function(item) {
        item.product = document.getElementById("newName" + item.nr).value;
        item.quantity = document.getElementById("newQ" + item.nr).value;
        $scope.editBox = "no";
        $scope.editItem = "";
    }
});