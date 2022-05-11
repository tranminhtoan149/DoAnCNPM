// JS switch TAB
function openCity(evt, Manage) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(Manage).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

document.getElementById("logout-button").addEventListener("click", function () {
    window.location.href = "http://localhost:3000/";
});
