{
    document.addEventListener('DOMContentLoaded', function (){
    let c1=document.querySelectorAll('.c1');
    l=c1.length
    const container = document.querySelector('.cc');
    console.log(c1)
    const numSubDivs = l; // Change this to adjust the number of sub-divs
    const radius =200 ; // Adjust the radius as needed
    let offset=25;
    let init_ang=Math.PI/2;
    const angle = (Math.PI/6)*5/(numSubDivs);
    for (let i = 0; i < numSubDivs; i++) {
        
        let x=0;
        let y=0;
        
        console.log(init_ang);
        if(init_ang>Math.PI/2&&init_ang<=Math.PI){
            console.log('11');
            x=-Math.round(radius*Math.sin(init_ang-Math.PI/2))+radius-offset;
            y=Math.round(radius*Math.cos(init_ang-Math.PI/2))+radius-offset;
        }
        else if(init_ang>Math.PI&&init_ang<=3*Math.PI/2){
            console.log('22');
            x=-Math.round(radius*Math.cos(init_ang-Math.PI))+radius-offset;
            y=-Math.round(radius*Math.sin(init_ang-Math.PI))+radius-offset;
        }else if(init_ang>3*Math.PI/2&&init_ang<=Math.PI*2){
            console.log('33');
            x=Math.round(radius*Math.sin(init_ang-3*Math.PI/2))+radius-offset;
            y=-Math.round(radius*Math.cos(init_ang-3*Math.PI/2))+radius-offset;
        }
        else{
            x=Math.round(radius*Math.cos(init_ang))+radius-offset;
            y=Math.round(radius*Math.sin(init_ang))+radius-offset;
        }
        subDiv=c1[i];
        console.log(`${x} ${y}`);
        subDiv.style.left = `${x}px`;
        subDiv.style.bottom = `${y}px`;
        init_ang+=angle;
        
    }
    
    } )
}
{
    document.addEventListener('DOMContentLoaded', function () {
        const menu = document.querySelectorAll(".menu_icon")[0];
        let menu_item=document.querySelectorAll('.menu_items')[0];
        let act=0;
        let m=document.querySelectorAll('.m');
        let mi=document.querySelectorAll('.menu_items')[0];
        let bod=this.querySelectorAll('.container')[0];
        menu.addEventListener('click',(e)=>{
            //t=1.5;
            t=0.2*m.length;
            e.stopPropagation();
            if(act===0){
                mi.style.transform='translateX(0px)';
                
                mi.style.display='block';
                menu_item.classList.toggle('active');
                menu.classList.toggle('active');
                act=1;
                for(var i=0;i<m.length;i++){
                    m[i].style.transform='translateX(0px)';
                    m[i].style.transition='transform '+t+'s'
                    t=t-0.2;
                }
                mi.style.transform='translateX(0px)';
                mi.style.transition='transform '+0.5+'s'
            }else{
                t=0.1;
                menu_item.classList.remove("active");
                menu.classList.remove("active");
                act=0;
                for(var i=0;i<m.length;i++){
                    m[i].style.transform='translateX(250px)';
                    m[i].style.transition='transform '+t+'s'
                    t=t+0.1;
                }
                mi.style.transform='translateX(250px)';
                mi.style.transition='transform '+t+'s'
            }
        });
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
        bod.addEventListener("click",(e)=>{
            //console.log("clicked")
            if (!e.target.closest('.m')) {
                console.log('body_clicked');
                if(act===1){
                    t=0.3;
                    menu_item.classList.remove("active");
                    menu.classList.remove("active");
                    act=0;
                    for(var i=0;i<m.length;i++){
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
    
}
{
    {
        document.addEventListener('DOMContentLoaded', function (){
            let pdb=document.querySelectorAll('#sdb');
            let project_text=document.querySelectorAll('.project_text');
            let short_description=document.querySelectorAll('.short_description');
            console.log(pdb);
            let description_text=this.querySelectorAll('.project_description');
            pdb.forEach((db,i)=>{
                console.log(i);
                pdb[i].addEventListener('click',(e)=>{
                    //console.log('hdufvdyf')
                    description_text[i].classList.toggle('active');
                    pdb[i].classList.toggle('active');
                    short_description[i].style.display='none'
                    project_text[i].classList.toggle('active');
                })
            });
            // Get the image element
    // Get the image element
    const images = document.querySelectorAll('#img');
    console.log(images)
    images.forEach((image,i)=>{
        console.log(image)
        
        image.addEventListener('click', function() {
            // Create a modal container
            const modalContainer = document.createElement('div');
            modalContainer.classList.add('modal-container');
        
            // Create a close button
            const closeButton = document.createElement('button');
            closeButton.innerHTML = 'X';
            closeButton.classList.add('close-button');
            closeButton.addEventListener('click', function() {
                modalContainer.remove();
            });
        
            // Create an image element inside the modal container
            const modalImage = document.createElement('img');
            modalImage.src = this.src;
            modalImage.alt = this.alt;
        
            // Add the image and close button to the modal container
            modalContainer.appendChild(closeButton);
            modalContainer.appendChild(modalImage);
        
            // Append the modal container to the body
            document.body.appendChild(modalContainer);
        });
        
        
    })
    
        
        } );
    }
}