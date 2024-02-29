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