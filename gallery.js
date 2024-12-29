

const scrollContainer=document.querySelector(".gallery");
const backBtn=document.querySelector("#backBtn");
const nextBtn=document.querySelector("#nextBtn");

scrollContainer.addEventListener("wheel",(event)=>{
    event.preventDefault();
    scrollContainer.scrollLeft += event.deltaY;
    scrollContainer.style.scrollBehavior="auto";
});

backBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior="smooth";
    scrollContainer.scrollLeft -= 900;
})

nextBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior="smooth";
    scrollContainer.scrollLeft += 900;
    
})