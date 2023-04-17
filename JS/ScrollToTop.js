let posTop=window.pageYOffset;
let MaxDownPos=0;
var scrollElem = document.getElementById("ToTop");

function ButtonInviz()
{
    if(MaxDownPos <= 10 && posTop <= 10)
    {
        scrollElem.style.opacity=0;
        scrollElem.style.pointerEvents="none";

    }
    else
    {
        scrollElem.style.opacity=1;
        scrollElem.style.pointerEvents="all";

    }
}

window.onscroll = function() {
    posTop=window.pageYOffset;
    if (posTop > 10) {
        scrollElem.style.transform = "rotate(0deg)";
    } else if(MaxDownPos>10) {
        scrollElem.style.transform = "rotate(-180deg)";
    }
    console.log(posTop);
}
function go(){
   if (posTop > 10) {
       MaxDownPos=posTop;
       goUp();
   }
   else{
       goDown();
   }
}
function goUp() {
       window.scrollTo({ top: 0, behavior: 'smooth' });
}
function goDown(){
       window.scrollTo({ top:MaxDownPos, behavior: 'smooth' });
}

setInterval(ButtonInviz,1000/60);