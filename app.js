// let img=document.querySelectorAll("img");
// let icon=document.querySelector(".music");
//  img.forEach((box)=>{ 
//     box.addEventListener("mouseover",()=>{
//             console.log("button was clicked");
//             icon.classList.remove("hide");
//     });
//     box.addEventListener("mouseout",()=>{
//         icon.classList.add("hide");
//     });
//   });

// const image = document.querySelector(".item .images");


// const playIcon = document.querySelector(".item .music");


// image.addEventListener("mouseover", () => {
//   playIcon.classList.remove("hide");
// });


// image.addEventListener("mouseout", () => {
//   playIcon.classList.add("hide");
// });
let items = document.querySelectorAll(".item");
items.forEach((item) => {
    let img = item.querySelector("img");
    let icon = item.querySelector(".music");
    img.addEventListener("mouseover", () => {icon.classList.remove("hide");});
    img.addEventListener("mouseout", () => {icon.classList.add("hide");});
});