
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const slideContainer = document.querySelector(".slides");
const thumbnailsContainer = document.querySelector(".thumbnails"); 

images.forEach((image) =>{
    const newSlide = document.createElement("div");
    newSlide.classList.add("slide");
    newSlide.innerHTML =`
                        <img src="${image.image}" alt="${image.title}">
                        <div class="texts">
                            <h1>
                            ${image.title}
                            </h1>
                            <p>
                            ${image.text}
                            </p>
                        </div> 
    `;
    slideContainer.append(newSlide); 
    const newthumbnail = document.createElement("div");
    newthumbnail.classList.add("thumbnail"); 
    newthumbnail.style.height = (100 / images.length) + "%";
    newthumbnail.innerHTML =`
                        <img src="${image.image}" alt="${image.title}">
    `;
    thumbnailsContainer.append(newthumbnail); 
   
});
let currentSlide = 0;

const allSlides = document.querySelectorAll(".slide");
allSlides[currentSlide].classList.add("active")

const allThumbnails = document.querySelectorAll(".thumbnail");
allThumbnails[currentSlide].classList.add("active") ;

allThumbnails.forEach((singleThumbneil,index) => {
    singleThumbneil.addEventListener("click",
        () => {

            allSlides[currentSlide].classList.remove("active");
            allThumbnails[currentSlide].classList.remove("active");
            
            currentSlide = index;
    
            allSlides[currentSlide].classList.add("active");
            allThumbnails[currentSlide].classList.add("active");
        
    },)
} )

const prevButton = document.querySelector(".prev");

prevButton.addEventListener("click",
    () => {
        allSlides[currentSlide].classList.remove("active");
        allThumbnails[currentSlide].classList.remove("active");
        if(currentSlide > 0){
            
            currentSlide--;

        }
        else{
            currentSlide = images.length-1
        }

        allSlides[currentSlide].classList.add("active");
            allThumbnails[currentSlide].classList.add("active");
}
);
const nextButton = document.querySelector(".next");

nextButton.addEventListener("click",
    function(){

        allSlides[currentSlide].classList.remove("active");
        allThumbnails[currentSlide].classList.remove("active");

        if(currentSlide < images.length - 1 ){
            
            currentSlide ++;

        }

        else{
            currentSlide = 0;
        }

        allSlides[currentSlide].classList.add("active");
        allThumbnails[currentSlide].classList.add("active");
}
);
