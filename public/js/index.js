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

var tl = gsap.timeline({repeat: 130, repeatDelay: 0});
tl.to("#conrad", {duration:2, x:300, ease: "bounce"});
tl.to("#conrad", {duration:2, x:0, ease: "bounce"});
// gsap.to("#conrad", {duration:2, x:0, ease: "bounce"});

var waveOne = gsap.timeline({repeat: 130, repeatDelay: 0});
waveOne.to("#wave-01", { duration: 2.5, ease: "power1.inOut", x: 150 });
waveOne.to("#wave-01", { duration: 2.5, ease: "power1.inOut", x: 0 });

let waveTwo = gsap.timeline({repeat: 30, repeatDelay: 1});
waveTwo.to("#wave-02", { duration: 2.5, ease: "power1.inOut", x: -150 });
waveTwo.to("#wave-02", { duration: 2.5, ease: "power1.inOut", x: 0 });
