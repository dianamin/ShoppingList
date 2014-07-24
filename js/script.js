/**
 * Created by Diana.Ghinea on 7/21/2014.
 */
var changeValue = function () {
    document.getElementById("qValue").innerText = document.getElementById("quantity").value;
};

var add = function() {
    items.push({
        "product" : "test",
        "quantity" : "1"
    });
};

var edit = function (id) {
    document.getElementById(id).setAttribute("style", "height: 100px;")
};

var scaled = [1, 1, 1, 1, 1, 1];

var scale = function (id, size) {
    if (scaled[parseInt(id)] == 1)
        document.getElementById(id).setAttribute("style", "height:" + size + "px;");
    else document.getElementById(id).setAttribute("style", "height: 0px;");
    scaled[parseInt(id)] *= (-1);
};