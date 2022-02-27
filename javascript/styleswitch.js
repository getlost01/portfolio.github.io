window.addEventListener("load",function(){
    document.querySelector(".preloader").classList.add("opacity-0");
    this.setTimeout(()=>{
        document.querySelector(".preloader").style.display="none";
    },1000)
})


const link=document.querySelectorAll(".alt-style");
var totallinks=link.length;
function setActiveStyle(color){
    for(let i=0;i<totallinks;i++)
    {
        if(color==link[i].getAttribute("title"))
        {
            link[i].removeAttribute("disabled");
        }
        else
        {
            link[i].setAttribute("disabled","true");
        }
    }
}
const bodyskin=document.querySelectorAll(".body-skin");
var totalbodyskin=bodyskin.length;
for(let i=0;i<totalbodyskin;i++)
{
    bodyskin[i].addEventListener("change",function(){
        if(this.value=="dark")
        {
            document.body.className="dark";
        }
        else
        {
            document.body.className="light";
        }
    });
}
document.querySelector(".toggle-style-switcher").addEventListener("click",()=>{document.querySelector(".style-switch").classList.toggle("open")})


// nav
const nav=document.querySelector(".nav"),
navlist=nav.querySelectorAll("li"),
totalnavlist=navlist.length,
allsection=document.querySelectorAll(".section"),
totalsection=allsection.length;

for(let i=0;i<totalnavlist;i++)
{
    const a=navlist[i].querySelector("a");
    a.addEventListener("click",function(){
        for(let k=0;k<totalsection;k++)
    {
        allsection[k].classList.remove("back-section");
    }
        for(let j=0;j<totalnavlist;j++)
        {
            if(navlist[j].querySelector("a").classList.contains("active")){
                allsection[j].classList.add("back-section");
            }
            navlist[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showsection(this);
        if(window.innerWidth<1200){
            asidesectiontogglebtn();
        }
    })
}

function showsection(element){
    for(let i=0;i<totalsection;i++)
    {
        allsection[i].classList.remove("active");
    }
    const target=element.getAttribute("href").split("#")[1];
    document.querySelector("#"+target).classList.add("active");
}

const navtogglerbtn=document.querySelector(".nav-toggle"),
aside=document.querySelector(".aside");
navtogglerbtn.addEventListener("click",()=>{
    asidesectiontogglebtn();
})
function asidesectiontogglebtn(){
    aside.classList.toggle("open");
    navtogglerbtn.classList.toggle("open");
    for(let i=0;i<totalsection;i++)
    {
        allsection[i].classList.toggle("open");
    }
}
function updatenav(element){
    for(let i=0;i<totalsection;i++)
    {
        navlist[i].querySelector("a").classList.remove("active");
    const target=element.getAttribute("href").split("#")[1];
    if(target== navlist[i].querySelector("a").getAttribute("href").split("#")[1]){
    navlist[i].querySelector("a").classList.add("active");
    }
    }
}

document.querySelector(".hire-me").addEventListener("click",function(){
    const sectionindex=this.getAttribute("data-section-index");
    showsection(this);
    updatenav(this);
})
