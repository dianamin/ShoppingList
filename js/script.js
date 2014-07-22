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

var edit = function (id) {
    console.log(id);
    document.getElementById(id).setAttribute("style", "height: 100px;")
}

var scaled = [1, 1];

var scale = function (id) {
    console.log(parseInt(id));
    console.log(scaled[parseInt(id)]);
    if (scaled[parseInt(id)] == 1)
        document.getElementById(id).setAttribute("style", "height: 200px;");
    else document.getElementById(id).setAttribute("style", "height: 0px;");
    scaled[parseInt(id)] *= (-1);
}