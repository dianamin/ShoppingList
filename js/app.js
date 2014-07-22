/**
 * Created by Diana.Ghinea on 7/21/2014.
 */
var app = angular.module('app', []);

var  bought = [];

var nr = 2;

var items = [
    {
        "nr" : "1",
        "editBox": false,
        "product" : "Ciocolată",
        "quantity" : "2",
        "bought" : false,
        "removed" : false
    },
    {
        "nr" : "2",
        "editBox": false,
        "product" : "Pizza",
        "quantity" : "1",
        "bought" : false,
        "removed" : false
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
        item.bought = true;
    };
    $scope.remove = function(item) {
        item.removed = true;
    };
    $scope.openEdit = function(item) {
       item.editBox = true;
       $scope.editItem = item.product;
        console.log(item.product);
        $scope.actualItem = item.nr;
    }
    $scope.cancelEdit = function(item) {
        $scope.editItem = "";
        $scope.editBox = false;
        $scope.actualItem = "";
    }

    $scope.edit = function(item) {
        item.product = item.newName;
        item.quantity = item.newQ;
        $scope.editBox = false;
        $scope.editItem = "";
        $scope.actualItem = "";
    }
    $scope.refresh = function() {
        for (var i = 0; i < $scope.items.length; i++) {
            if($scope.items[i].bought == true) $scope.items[i].removed = true;
        }
    }
});