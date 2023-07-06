const mainImg = document.getElementById("main-img");
const allImgs = document.querySelectorAll(".right-imgs img");

allImgs.forEach(img =>{

  img.addEventListener("click" , e =>{

    let selectedImg  = e.target;
    mainImg.src = selectedImg.src;

    // to remove border from previous selected img

    allImgs.forEach(images => images.classList.remove("active"))

    selectedImg.classList.add("active");

  })

})