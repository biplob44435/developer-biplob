


var icon = document.getElementById("icon");
icon.onclick =function(){
    document.body.classList.toggle("dark-theme");
    if( document.body.classList.contains("dark-theme")){
        icon.src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXwIruVbIrxusIBKyQq87GUygDWJkw-_AteC0IS9AIBT2hS4dOlYQtfarsDUecJRWsKvzXBZU9Negb05GG9xRPo3u8o8vqn122HvXhmawgSlJ8lp-tYqEwFTEVATewjpWNACqhrGXflbmRRRifyTT6Z7qSqNreMzmnty7eMdmerAnxp0DxaX1Jq7IY0g/s236/sun.png";
    }else{
        icon.src= "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIGfVqHr3S6-uBLdNqn7wHfENeSjdfEP__X31jxtZegusQMatll2_2zZKa2nqXW-Fgrt5f_D84wZUW9aN3S3Q4ua3uT5KUO8yhmpNjJ9NLzJ2fpgcApDy772-JiEZs6gV7Pn8rSYj8Vw1saUtKPnqKizhHHUxEEv_KqoYlROFSZAxCB8Nk9m4gE-PmGw/s305/moon.png";
    }
    alert('You Have Click the Dark Button ')
    time:1000;
}





jQuery(document). ready (function ($) 
{
    $('.count').counterUp({
        delay: 10,
        time: 1000
    });
})








  

