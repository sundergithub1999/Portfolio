var tabLinks=document.getElementsByClassName("tab-links")
var tabContents=document.getElementsByClassName("tab-content")
var sidemenu=document.getElementById("sidemenu")

function opentab(tabname){
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-title")
    }

    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab")
    }

    event.currentTarget.classList.add("active-title")
    document.getElementById(tabname).classList.add("active-tab");

}

// for side menu

function openmenu(){
    sidemenu.style.left="0";
}

function closemenu(){
    sidemenu.style.left="-160px"
}

