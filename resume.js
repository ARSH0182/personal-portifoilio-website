var navMenu=document.querySelectorAll('.nav-menu  a');

for(var i=0;i<navMenu.length;i++)
{
    navMenu[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetsectionId=this.textContent.trim().toLowerCase();
        var targetSection=document.getElementById(targetsectionId);

        var interval=setInterval(function(){
            var sectioncoordiantes=targetSection.getBoundingClientRect();
            if(sectioncoordiantes.top <= 0)
            {
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
        },20);

    });
}

//skill bar

var progressBar=document.querySelectorAll('.skill-progress > div');
var skillContainer=document.getElementById('skill-container');
window.addEventListener('scroll',checkscroll);
var animation=false;


function intialbars(){
    for(let bar of progressBar)
    {
        bar.style.width=0 + '%';
    }
}
intialbars();


function fillbar()
{
    for(let bar of progressBar)
    {
        let targetwidth=bar.getAttribute('data-width-bar');
        let currewidth=0;
        let interval=setInterval(function()
        {
            if(currewidth > targetwidth)
            {
                clearInterval(interval);
                return;
            }
            currewidth++;
            bar.style.width=currewidth + '%';

        },7);
    }

}


function checkscroll()
{
    var coordinatess=skillContainer.getBoundingClientRect();
    if(!animation && coordinatess.top <= window.innerHeight)
    {
        animation=true;
        fillbar();
    }
    else if(coordinatess.top > window.innerHeight)
    {
        animation=false;
        intialbars();
    }
}