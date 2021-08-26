console.log("you are on the index.html!");
window.addEventListener("load", function() {
   let carousel = document.getElementById("banner"); 
   let timerIndex = 0, dir="./assets/product-images/";
   let images = {   
       alt: ["product 01", "product 02", "product 03"],
       pics: [ 
           "product-01.jpg", 
           "product-02.jpg", 
           "product-03.jpg"
        ]};
    let img = document.createElement("img");
    img.src = dir + images.pics[0];
    img.width = 800;
    img.alt = images.alt[0];
    carousel.appendChild(img);
    timer(timerIndex, dir, images, img);
});

function timer(timerIndex, dir, images, img) {
    setInterval(function() {
        timerIndex++;
        if (timerIndex > 2) {
            timerIndex = 0;
        }
        img.src = dir + images.pics[timerIndex];
        img.alt = images.alt[timerIndex];
    }
    , 4000);
}
