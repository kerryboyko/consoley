var aptgetString = "sudo apt-get install ";
window.onload = function() {
    var boxes = document.forms["checkboxes"];
    boxes.addEventListener("click", generateApt, true);
};

function addAptString(element, index, array) {
    if (document.getElementById(element).checked) {
        aptgetString = aptgetString + element + " ";
    };
};

function generateApt(ev) {
    aptgetString = "sudo apt-get install ";
    ["xchat", "pidgin", "kopete"].forEach(addAptString);
    document.getElementById("installCode").innerHTML = aptgetString
};