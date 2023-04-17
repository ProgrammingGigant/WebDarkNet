var BackgroundMatrix=document.getElementById("BackgroundMatrix");
var NavPage=document.getElementById("NavPage");
var NavPage=document.getElementById("NavPage");
var MainMenu=document.getElementById("MainMenu");

var ctx=BackgroundMatrix.getContext("2d");

BackgroundMatrix.width = innerWidth;
BackgroundMatrix.height = innerHeight;

var chararr="POTAPOVEGOR1ISB-00-1OP-21CHSU"; 
chararr=chararr.split("");

var font_size=BackgroundMatrix.width/200;

var col=BackgroundMatrix.width/font_size;
var drop=[];

const resize = () => {
    if(MainPage.offsetWidth+400 >=  window.innerWidth)
    {
        NavPage.style.display="none";
        MainMenu.style.display="none";
    }
    else
    {
        NavPage.style.display="inline-block";
        MainMenu.style.display="inline-block";
    }
    BackgroundMatrix.width = innerWidth;
    BackgroundMatrix.height = innerHeight;
    font_size=BackgroundMatrix.width/200;
  };
  window.addEventListener("resize", resize);

  for(var x=0;x<col;x++)
  drop[x]=1;

let c1=255,c2=0,c3=0, k=15;

function draw()
{
    ctx.fillStyle="rgba(20, 20, 20, 0.075)";
    ctx.fillRect(0,0,BackgroundMatrix.width,BackgroundMatrix.height);

    if(c1==255 && c2<255 && c3==0)
    {
        c2+=k;
    }
    if(c1>0 && c2==255 && c3==0)
    {
        c1-=k;
    }
    if(c1==0 && c2==255 && c3<255)
    {
        c3+=k;
    }
    if(c1==0 && c2>0 && c3==255)
    {
        c2-=k;
    }
    if(c1<255 && c2==0 && c3==255)
    {
        c1+=k;
    }
    if(c1==255 && c2==0 && c3>0)
    {
        c3-=k;
    }

    ctx.fillStyle='rgba('+c1+','+c2+','+c3+')';
    ctx.font=font_size+"px arial";

    for(var i=0;i<drop.length;i++)
    {
        var text=chararr[Math.floor(Math.random()*chararr.length)];
        ctx.fillText(text,i*font_size,drop[i]*font_size);
        if(drop[i]*font_size>BackgroundMatrix.height&&Math.random()>0.975)
            drop[i]=0;
        drop[i]+=1;
    }
}

setInterval(draw,66);