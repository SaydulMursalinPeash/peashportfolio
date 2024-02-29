{
    document.addEventListener('DOMContentLoaded', function (){
    let c1=document.querySelectorAll('.c1');
    l=c1.length
    const container = document.querySelector('.cc');
    console.log(c1)
    const numSubDivs = l; // Change this to adjust the number of sub-divs
    const radius =200 ; // Adjust the radius as needed
    let offset=25;
    let init_ang=Math.PI/2-Math.PI/10;
    const angle = (Math.PI*2)/(3*numSubDivs);
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