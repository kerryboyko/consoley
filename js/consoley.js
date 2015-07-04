var aptgetString = "sudo apt-get install ";
var listOfPackages = [];

var jsonLoad = function(distro) {
    console.log("startJsonLoad");

    $.getJSON("http://brianboyko.github.io/consoley/packages.json", function(data){
        console.log(data);
        var items = [];
        console.log(items);
        $.each(data, function(key, val) {
            if (val.repo == "heading") {
                items.push("<h3>" + val.engName + "</h3>");
                console.log(JSON.stringify(val));
            } else if (val.distros.indexOf(distro) != -1) {
                items.push('<img src="images/' + val.pakName +
                    '.png" />' + '<input class="' + val.repo +
                    '" type="checkbox" id="' + val.pakName +
                    '">' + val.engName + '</input>' + '<p>' +
                    val.description + '</p><br />');
                console.log(JSON.stringify(val));
            }
        });
        console.log(items);
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
    console.log(debian);
    debian.addEventListener("click", function(){
        document.getElementById('checkboxes').innerHTML = "&nbsp;";
        document.getElementById("installCode").innerHTML = "&nbsp;";
        jsonLoad("debian");
    }, true);


    var ubuntu = document.getElementById('ubuntu64');
    console.log(ubuntu);
    ubuntu.addEventListener("click", function(){
        document.getElementById('checkboxes').innerHTML = "&nbsp;";
        document.getElementById("installCode").innerHTML = "&nbsp;";
        jsonLoad("ubuntu");
    }, true);


    var linuxmint = document.getElementById('linuxmint64');
    console.log(linuxmint);
    linuxmint.addEventListener("click", function(){
        document.getElementById('checkboxes').innerHTML = "&nbsp;";
        document.getElementById("installCode").innerHTML = "&nbsp;";
        jsonLoad("linuxmint");
    }, true);

var wrap = $("#terminal-container");

wrap.on("scroll", function(e) {
    
  if (this.scrollTop > 200) {
    wrap.addClass("fixed");
  } else {
    wrap.removeClass("fixed");
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



