


window.addEventListener("wheel", function(e){
	if(matchMedia("screen and (min-width: 820px)").matches){ 
        e.preventDefault();
    }
},{passive : false});

var link0=document.getElementById("link0");
var link1=document.getElementById("link1");
var link2=document.getElementById("link2");
var link3=document.getElementById("link3");
var link4=document.getElementById("link4");
var $html = $("html");
var page = 1;
var lastPage = $("body>*").length;

$html.animate({scrollTop:0},10);

// const link1=document.getElementById("profile");
// const link2=document.getElementById("skill");
// const link3=document.getElementById("project");
// const link4=document.getElementById("contact");

$(window).on("wheel", function(e){
    if(matchMedia("screen and (min-width: 821px)").matches){
        if($html.is(":animated")) return;
        
        if(e.originalEvent.deltaY > 0){
            if(page== lastPage) return;
            
            page++;
            checkLink();
        }else if(e.originalEvent.deltaY < 0){
            if(page == 1) return;
            
            page--;
            checkLink();
        }
        var posTop = (page-1) * $(window).height();
        
        $html.animate({scrollTop : posTop});
    }
});

function checkLink(){
    if(page==1){
        link1.style.color="#1e1e1e";
        link2.style.color="#1e1e1e";
        link3.style.color="#1e1e1e";
        link4.style.color="#1e1e1e";

        // document.getElementById("main-profile").style.animationDelay="1s";
        // document.getElementById("about-me").style.animationDelay="1s";
        // document.getElementById("main-profile").style.animation="fadein 1s";
        // document.getElementById("about-me").style.animation="fadein 1s";
        // document.getElementsByClassName("main-txt").style.animation="fadein 5s";
    }else if(page==2){
        link1.style.color="#e73c7e";
        link2.style.color="#1e1e1e";
        link3.style.color="#1e1e1e";
        link4.style.color="#1e1e1e";
    }else if(page==3){
        link1.style.color="#1e1e1e";
        link2.style.color="#ee7752";
        link3.style.color="#1e1e1e";
        link4.style.color="#1e1e1e";
    }else if(page==4){
        link1.style.color="#1e1e1e";
        link2.style.color="#1e1e1e";
        link3.style.color="#23a6d5";
        link4.style.color="#1e1e1e";
    }else if(page==5){
        link1.style.color="#1e1e1e";
        link2.style.color="#1e1e1e";
        link3.style.color="#1e1e1e";
        link4.style.color="#23d5ab";
    }
}
link0.onmousedown= function() {
    page=1;
    document.body.scrollIntoView({ behavior: 'smooth' });
    checkLink();
};
link1.onmousedown= function() {
    page=2;
    document.querySelector("#profile").scrollIntoView({ behavior: 'smooth' });
    checkLink();
};
link2.onmousedown= function() {
    page=3;
    document.querySelector("#skill").scrollIntoView({ behavior: 'smooth' });
    checkLink();
};
link3.onmousedown= function() {
    page=4;
    document.querySelector("#project").scrollIntoView({ behavior: 'smooth' });
    checkLink();
};
link4.onmousedown= function() {
    page=5;
    document.querySelector("#contact").scrollIntoView({ behavior: 'smooth' });
    checkLink();
};
