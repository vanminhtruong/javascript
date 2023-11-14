let scrollTop = document.querySelector('.scrollTop');
let boxHeader = document.querySelector('.box-header');
let times = 0;
let times2 = 4;

const handleScroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTop.style.display = "block";
        boxHeader.classList.add("fix");
        document.querySelector(".imgLogo").style.height = "50px"
        document.querySelector(".imgLogo").style.transition = "all 0.5s ease-in-out";
    } else {
        scrollTop.style.display = "none";
        boxHeader.classList.remove("fix");
        document.querySelector(".imgLogo").style.height = "70px"
        document.querySelector(".imgLogo").style.transition = "all 0.5s ease-in-out";
    }
}

window.onscroll = function(){
    handleScroll();
}

const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

scrollTop.addEventListener("click",()=>{
    topFunction();
})

// console.log(document.querySelector(".imgLogo"))





