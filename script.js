let loader = document.querySelector(".loader");
window.addEventListener("load" , ()=> {
loader.classList.add("load-off");
loader.addEventListener("transitionend", ()=>{
    document.body.removeChild(loader);
})
})