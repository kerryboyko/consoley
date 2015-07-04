var aptgetString = "sudo apt-get install ";
var listOfPackages = [];

var jsonLoad = function() {


    $.getJSON("http://brianboyko.github.io/consoley/packages.json", function(data) {
        var items = [];
        $.each(data, function(key, val) {
            if (val.repo == "heading") {
                items.push("<h3>" + val.engName + "</h3>");
            } else {
                items.push('<img src="images/' + val.pakName +
                    '.png" />' + '<input class="' + val.repo + ' ' + val.distros +
                    '" type="checkbox" id="' + val.pakName +
                    '">' + '<span class="' + val.repo + ' ' + val.distros + '">' + val.engName + '</span></input>' + '<p class="'+ val.repo + ' ' + val.distros + '">' +
                    val.description + '</p><br />');
            }
        });
        $("<ul/>", {
            "class": "my-new-list",
            html: items.join("")
        }).appendTo(document.getElementById('checkboxes'));
    });

};

window.onload = function() {
    jsonLoad();
    var boxes = document.forms.checkboxes;
    var elements = document.getElementsByClassName('debian64');
    boxes.addEventListener("click", generateApt, true);
};

function generateApt(ev) {
    aptgetString = "sudo apt-get install ";

    var allCheckboxes = document.getElementsByClassName('debian64');
    var noneChecked = true;
    for (var i = 0; i < allCheckboxes.length; i++) {
        if (allCheckboxes[i].checked) {
            noneChecked = false;
            aptgetString = aptgetString + allCheckboxes[i].id + " ";
        } //endif
    } //endfor
    if (!noneChecked) {
        document.getElementById("installCode").innerHTML = aptgetString;
    } else {
        document.getElementById("installCode").innerHTML = " ";
    }
}