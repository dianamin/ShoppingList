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

    $scope.addProduct = function(newItem) {
        nr++;
        $scope.items.push({
            "nr" : String(nr),
            "product": newItem.product,
            "quantity": newItem.quantity
        })
    };
    $scope.buy = function(item) {
        item.bought = !item.bought;
    };
    $scope.remove = function(item) {
        //item.removed = true;
        for (var i = 0; i < $scope.items.length; i++) {
            if ($scope.items[i].nr == item.nr) {
                $scope.items.splice(i, 1);
                break;
            }
        }
    };
    $scope.openEdit = function(item) {
       item.editBox = true;
       $scope.editItem = item.product;
        console.log(item.product);
        $scope.actualItem = item.nr;
    };
    $scope.cancelEdit = function(item) {
        $scope.editItem = "";
        $scope.editBox = false;
        $scope.actualItem = "";
    };

    $scope.edit = function(item) {
        item.product = item.newName;
        item.quantity = item.newQ;
        $scope.editBox = false;
        $scope.editItem = "";
        $scope.actualItem = "";
    };
    $scope.refresh = function() {
        for (var i = 0; i < $scope.items.length; i++) {
            if ($scope.items[i].bought == true) {
                console.log(i);
                $scope.items.splice(i, 1);
                i--;
             }
        }
    };
    $scope.orderProp = 'nr';
});
app.directive("test", function() {
   return function (scope, element) {
       element.bind("mouseenter", function() {
           console.log(":)");
       })
   }
});