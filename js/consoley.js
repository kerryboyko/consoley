var aptgetString = "sudo apt-get install ";
var listOfPackages = [];

var jsonLoad = function(distro) {
    console.log("startJsonLoad");

    $.getJSON("http://brianboyko.github.io/consoley/packages.json", function(data){
        var items = [];
        $.each(data, function(key, val) {
            if (val.repo == "heading") {
                items.push("<h3>" + val.engName + "</h3>");
            } else if (val.distros.indexOf(distro) != -1) {
                items.push('<img src="images/' + val.pakName +
                    '.png" />' + '<input class="' + val.repo +
                    '" type="checkbox" id="' + val.pakName +
                    '">' + val.engName + '</input>' + '<p>' +
                    val.description + '</p><br />');
            }
        });
        $("<ul/>", {
            "class": "my-new-list",
            html: items.join("")
        }).appendTo(document.getElementById('checkboxes'));
    });
    var boxes = document.forms.checkboxes;
    var elements = document.getElementsByClassName('aptget');
    boxes.addEventListener("click", generateApt, true);


};


window.onload = function() {
    var debian = document.getElementById('debian64');
    debian.addEventListener("click", function(){
        document.getElementById('checkboxes').innerHTML = "&nbsp;";
        document.getElementById("installCode").innerHTML = "&nbsp;";
        jsonLoad("debian");
    }, true);


    var ubuntu = document.getElementById('ubuntu64');
    ubuntu.addEventListener("click", function(){
        document.getElementById('checkboxes').innerHTML = "&nbsp;";
        document.getElementById("installCode").innerHTML = "&nbsp;";
        jsonLoad("ubuntu");
    }, true);


    var linuxmint = document.getElementById('linuxmint64');
    linuxmint.addEventListener("click", function(){
        document.getElementById('checkboxes').innerHTML = "&nbsp;";
        document.getElementById("installCode").innerHTML = "&nbsp;";
        jsonLoad("linuxmint");
    }, true);

var elementPosition = $('#terminal-container').offset();
console.log(elementPosition);

$(window).scroll(function(){
    console.log("scrolling");
        if($(window).scrollTop() > elementPosition.top){
              $('#terminal-container').css('position','fixed').css('top','0');
        } else {
            $('#terminal-container').css('position','static');
        }    
});



};

function generateApt(ev) {
    aptgetString = "sudo apt-get install ";

    var allCheckboxes = document.getElementsByClassName('aptget');
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
        document.getElementById("installCode").innerHTML = "&nbsp;";
    }
};

