angular.module('myApp', []).controller('myControl', function ($scope) {
    //Angular wasn't able to retrieve the colorpicker value, so I fixed it this way
    $scope.color = document.getElementById("colorPicker").value;
    //set the wizard values to their default values, false
    $scope.wizHarry = false;
    $scope.wizHermoine = false;
    $scope.wizRon = false;

    //This method turns the data that was entered into a json object,
    //which will be downloaded to the computer after generation
    $scope.log = function () {
        var person = {
            firstName: $scope.firstName,
            lastName: $scope.lastName,
            birthDate: $scope.birthDate,
            shoeSize: $scope.shoeSize,
            //this is a list of booleans
            wizards: {
                "harry": $scope.wizHarry,
                "ron": $scope.wizRon,
                "hermoine": $scope.wizHermoine
            },
            time: $scope.time,
            color: $scope.color
        }

        //here the JSON object will be downloaded as a .json file
        //thanks to Daniël Camps for providing the code.
        //source: https://stackoverflow.com/questions/19721439/download-json-object-as-a-file-from-browser
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(person));
        var downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", "yourUniqueProfile.json");
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }
});