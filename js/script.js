/**
 * Created by Diana.Ghinea on 7/21/2014.
 */
var changeValue = function () {
    document.getElementById("qValue").innerText = document.getElementById("quantity").value;
}

var add = function() {
    items.push({
        "product" : "test",
        "quantity" : "1"
    })
    console.log(items);
}