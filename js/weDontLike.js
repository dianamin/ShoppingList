app.filter('weDontLike', function () {

    return function (inputArrayName, name) {

        var returnArray = [];

        for (var i in inputArrayName) {
            if (inputArrayName[i] != name) {
                returnArray.push(inputArrayName[i]);
            }
        }

        return returnArray;

    }

})