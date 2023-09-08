const btnScollTop = document.getElementById("scrollTop");

btnScollTop.addEventListener("click", function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    });
})

function navProjects(){
    document.getElementById("project_section").scrollIntoView({
        behavior: 'smooth'
   });
}

function navContact(){
    document.querySelector(".contact_section").scrollIntoView({
        behavior: 'smooth'
   });
}


function navEducation(){
    document.getElementById("education_section").scrollIntoView({
        behavior: 'smooth'
   });
}


window.onscroll = function()
{
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
        console.log("yes");
        btnScollTop.style.visibility="visible"
    }else{
        btnScollTop.style.visibility="hidden"

    }
};