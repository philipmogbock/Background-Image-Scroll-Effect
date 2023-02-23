const mainContentEl =document.querySelector(".main-container");

window.addEventListener("scroll",()=>{
    updateImage();

})


function updateImage(){
    // reducing opaccity of image as you scroll further you scroll the more transparent 
    mainContentEl.style.opacity=1-(window.pageYOffset/800);

    mainContentEl.style.backgroundSize = 160 - window.pageYOffset/12 + "%";


}