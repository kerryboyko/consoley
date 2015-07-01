var aptgetString = "sudo apt-get install ";
var installNames = []

window.onload = function() {
    var boxes = document.forms["checkboxes"];
    boxes.addEventListener("click", generateApt, true);
    var elements = document.getElementsByClassName('aptget');
    for (var i = 0; i < elements.length; i++) {
        installNames[i] = elements[i].getAttribute('id');
    };
};

function addAptString(element, index, array) {
    if (document.getElementById(element).checked) {
        aptgetString = aptgetString + element + " ";
    };
};

function generateApt(ev) {
    aptgetString = "sudo apt-get install ";

    installNames.forEach(addAptString);

    var allCheckboxes = document.getElementsByClassName('aptget');
    noneChecked = true;
    for (var i = 0; i < allCheckboxes.length; i++) {
        if (allCheckboxes[i].checked) {
            noneChecked = false;
        }; //endif
    }; //endfor
    if (!noneChecked) {
        document.getElementById("installCode").innerHTML = aptgetString;
    }
    else {
    	document.getElementById("installCode").innerHTML = " "
    };


};