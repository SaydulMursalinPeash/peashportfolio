document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelectorAll(".menu_icon")[0];
    let menu_item=document.querySelectorAll('.menu_items')[0];
    let act=0;
    let m=document.querySelectorAll('.m');
    let mi=document.querySelectorAll('.menu_items')[0];
    let bod=this.querySelectorAll('.container')[0];
    menu.addEventListener('click',(e)=>{
        //t=1.5;
        e.stopPropagation();
        if(act===0){
            mi.style.transform='translateX(0px)';
            t=1.3;
            mi.style.display='block';
            menu_item.classList.toggle('active');
            act=1;
            for(var i=0;i<5;i++){
                m[i].style.transform='translateX(0px)';
                m[i].style.transition='transform '+t+'s'
                t=t-0.3;
            }
            mi.style.transform='translateX(0px)';
            mi.style.transition='transform '+0.5+'s'
        }else{
            t=0.3;
            menu_item.classList.remove("active");
            act=0;
            for(var i=0;i<5;i++){
                m[i].style.transform='translateX(250px)';
                m[i].style.transition='transform '+t+'s'
                t=t+0.3;
            }
            mi.style.transform='translateX(250px)';
            mi.style.transition='transform '+1.5+'s'
        }
    });
    bod.addEventListener("click",(e)=>{
        //console.log("clicked")
        if (!e.target.closest('.m')) {
            console.log('body_clicked');
            if(act===1){
                t=0.3;
                menu_item.classList.remove("active");
                act=0;
                for(var i=0;i<5;i++){
                    m[i].style.transform='translateX(250px)';
                    m[i].style.transition='transform '+t+'s'
                    t=t+0.3;
                }
                mi.style.transform='translateX(250px)';
                mi.style.transition='transform '+1.5+'s';
            }
        }
        
    })
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
    
            const target = document.querySelector(this.getAttribute('href'));
    
            // Smooth scroll animation
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
