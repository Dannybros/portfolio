const emailTooltip = document.getElementById("emailToolTip");
const projectTooltip = document.getElementById("projectToolTip");

function copyEmail() {
    navigator.clipboard.writeText("hp24@gmail.com");
    emailTooltip.innerHTML = "Opening email to: hp24@gmail.com";
}

function outEmailTooltip() {
    emailTooltip.innerHTML = "Send Email";
}

function outProjectTooltip(){
    projectTooltip.innerHTML = "Click to open list of projects";
}
