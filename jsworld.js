var w = null;
var temp;

function myload() {
    alert("Welcome to JS world. Have fun!!!!!");
}

function setName() {
    document.myform.username.value = "Ghost";
}

function displaySubmit(temp){
    alert(temp);
}

function namealert() {
    check = document.myform.username.value;
    if ( check == "") {
        alert("please enter your name");
    }
    else {

        if (confirm("are you sure?")) {
            alert("hello " + document.myform.username.value);
        }
        else {
            alert("Please enter your name again");
        }
    }
}

function galert() {
    if (document.gd.gender[0].checked) {
        alert("your gender is " + document.gd.gender[0].value);
    }
    else if (document.gd.gender[1].checked) {
        alert("your gender is " + document.gd.gender[1].value);
    }
    else {
        alert("Please select your gender");
    }
}

function glang() {
    var text = "Languages: ";
    count = 0;
    for (i = 0; i < document.langsel.language.length; i++) {
        if (document.langsel.language[i].checked == true) {
            text += document.langsel.language[i].value + ",";
            count++;
        }
    }
    if (count != 0) {
        alert(text);
    }
    else {
        alert("Please select languages");
    }
}


function coalert() {
    alert("Your course is " + document.course.KCGgroup.value);
}


function openUrl(url) {
    var next = url;
    newwin = open("homework3.html", "newwin", 'status = 0, toolbar = 0, resizable = 0, width = 258, height = 137')
}



function openWindow() {
    w = open("homework3.html", "homework3.html", "width=600px, height=400");
}

function closeWindow() {
    if (w) {
        w.close();
        w = null;
    }
}

function resizeWindow() {
    w.resizeTo(250, 250);
    w.focus();
}

function moveWindow() {
    w.moveTo(500, 100);
    w.focus();
}

function changecolor(id, color) {
    var id, color;
    document.getElementById(id).style.backgroundColor = color;
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}