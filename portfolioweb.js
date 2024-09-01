var img=document.querySelector(".hero-img");
    var btn=document.querySelector(".btn");
    img.addEventListener('click',function(){
    console.log(alert("cannot click"));
    });
    btn.addEventListener('click',function(){
        window.scrollTo(30,10);
    });
