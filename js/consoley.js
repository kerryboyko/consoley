var aptgetString = "sudo apt-get install ";
var installNames = [];
var listOfPackages = [];


var jsonLoad = function(){
    listOfPackages = $.getJSON("http://brianboyko.github.io/consoley/packages.json", function(result){});
};


$.getJSON( "http://brianboyko.github.io/consoley/packages.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    if(val.repo == "heading"){
        items.push( "<h3>"+ val.engName + "</h3>" );
    }
    else{
        items.push( '<img src="images/' + val.pakName + '.png" />"' + '<input class="' + val.repo + '" type="checkbox" id="' + val.pakName + '">' + val.engName + '</input>' + '<p>' + val.description + '</p><br />' );
    }

  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( document.getElementById('checkboxes') );
});


var allPackages = function(list){ // takes an array of objects from JSON
    var checkboxGenerator = "";
    console.log("is it getting here");
    list.forEach(function(){
        if(list[i].repo == "heading"){
            var newdiv = document.createElement('h3');
            newdiv.innerHTML = list[i].engName;
            document.getElementbyId('checkboxes').appendChild(newdiv);
        }
        else{
            var newdiv = document.createElement('div');
            newdiv.innerHTML = '<img src="images/' + list[i].pakName + '.png" />"' + '<input class="' + list[i].repo + '" type="checkbox" id="' + list[i].pakName + '">' + list[i].engName + '</input>' + '<p>' + list[i].description + '</p><br />';
        document.getElementbyId('checkboxes').appendChild(newdiv);
        };//endif
    });
//endfor
        return checkboxGenerator; // returns a string.
};//end allPackages()

window.onload = function() {
    jsonLoad();

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