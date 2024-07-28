//===================================
// 3.1

// const title = document.getElementById("title");

// title.innerText = "Got you!";

// console.log(title);

//===================================
// 3.2 Selectors

// const title = document.getElementById("something");
// console.log(title.className);

// const hellos = document.getElementsByClassName("Hellos");
// console.log(hellos);

// const title = document.getElementsByTagName("h1");
// console.log(title)

// css selector기 때문에 이런식으로 .이나 띄어쓰기를 이용
// const title = document.querySelector(".hello h1");
// console.log(title);

// const title = document.querySelector(".hello h1");

// title.innerText = "Hehehehe";
// console.log(title);

//===================================
// 3.3~3.5 Events

// const title = document.querySelector("div.hello:first-child h1");
// console.log(title);

// title.style.color = "blue";

// const title = document.querySelector("div.hello:first-child h1");

// console.dir(title);

// function handleTitleClick(){
//     title.style.color = "blue";
//     console.log("title was clicked! ");
// };

// function handleMouseEnter(){
//     title.innerText = "Mouse is here!";
//     console.log("mouse is here!!");
// };

// function handleMouseLeave(){
//     title.innerText = "Mouse is gone!";
//     console.log("mouse is leave!!");
// };

// // 유저가 click 할 때 실행되는 것이므로, 함수를 ()로 닫아주지 않음.
// // 여기서 함수를 ()로 닫아주게되면 script를 읽으면서 바로 함수가 동작하게 됨
// title.addEventListener("click", handleTitleClick);
// title.addEventListener("mouseenter", handleMouseEnter);
// title.addEventListener("mouseleave", handleMouseLeave);

// // addEventListener()를 아래와 같이 적어줄 수도 있지만 addEventListener가 더 깔끔하고,
// // 나중에 removeEventListener()를 통해서 event listener를 제거할 수 있어서 편함
// // title.onclick = handleTitleClick;
// // title.onmouseenter = handleMouseEnter;
// // title.onmouseleave = handleMouseLeave;

// function handleWindowResize(){
//     document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy(){
//     alert("copier!");
// }

// function handleWindowoffline(){
//     alert("all good");
// }

// function handleWindowonline(){
//     alert("SOS connection is stopped!");
// }

// // document처럼 기본적으로 제공하는 object
// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowoffline);
// window.addEventListener("online", handleWindowonline);

//===================================
// 3.6 CSS in Javascript

// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick(){
//     const currentColor = h1.style.color;
//     let newColor;

//     if (currentColor === "blue"){
//         newColor = "tomato";
//     } else{
//         newColor="blue";
//     };
//     h1.style.color = newColor;
//     console.log(h1.style.color);
// };

// h1.addEventListener("click", handleTitleClick);

//===================================
// 3.7 CSS in Javascript Two

// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//     const clickedClass = "clicked"

//     if(h1.className ===clickedClass){
//         h1.className ="";
//     } else {
//         h1.className = clickedClass;
//     }
//     // h1.className = "active";
//     console.log(h1.className);
// };

// h1.addEventListener("click", handleTitleClick);

//===================================
// 3.8 CSS in Javascript Three

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const clickedClass = "clicked"

// 아래 함수가 하는 역할을 toggle 함수가 대신 해줌
    // if(h1.classList.contains(clickedClass)){
    //     h1.classList.remove(clickedClass);
    // } else {
    //     h1.classList.add(clickedClass);
    // };

    // toggle()은 classList를 체크해서 해당 class가 존재하면 지우고, 없으면 넣어줌
    h1.classList.toggle("clicked");
    console.log(h1.className);
};

h1.addEventListener("click", handleTitleClick);
