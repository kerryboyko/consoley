var aptgetString = "sudo apt-get install ";
var installNames = [];
var myPackages = $.getJSON('http://brianboyko.github.io/consoley/packages.json', function(){
    console.log('success');
});
console.log(JSON.stringify(myPackages));

var allPackages = function(list){ // takes an array of objects from JSON
    var checkboxGenerator = "";
    for (var i = 0; i < list.length; i++) {
        if(list[i].repo == "heading"){
            checkboxGenerator = checkboxGenerator + '<H3>' + list[i].engName + '</H3>';
        }
        else{
            checkboxGenerator = checkboxGenerator + '<img src="images/' + list[i].pakName + '.png" />"' + '<input class="' + list[i].repo + '" type="checkbox" id="' + list[i].pakName + '">' + list[i].engName + '</input>' + '<p>' + list[i].description + '</p><br />';
        };//endif
    };//endfor
        return checkboxGenerator; // returns a string.
};//end allPackages()

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