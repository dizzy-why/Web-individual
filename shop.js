function myFunction(imgs) {
    var expandImg = document.getElementById("listImg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block"; 
  }