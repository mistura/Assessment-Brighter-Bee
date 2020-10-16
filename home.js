// let showbtn = document.getElementById(`btn1`);
// let hidebtn = document.getElementById(`btn2`);
// let stylebtn = document.getElementById(`btn3`);
// let clearbtn = document.getElementById(`btn4`);
// let paradiv = document.getElementById(`para`);
// let h1 = document.getElementById(`header`);
// let contain = document.getElementById(`para`);
// let text = document.getElementById(`lorem`);
// contain.style.display = `none`;

// clearbtn.addEventListener(`click`, change);
// function change() {
//     h1.style.fontSize = `50px`;
// }
// hidebtn.addEventListener(`click`, hide);
// function hide() {
//     contain.style.display =`none`;
// }
// showbtn.addEventListener(`click`, display);
// function display() {
//     contain.style.display =`block`;
// }
// stylebtn.addEventListener(`click`, style)
// function style() {
//     contain.style.backgroundColor = `black`;
//     h1.style.color = `white`;
//     text.style.color =`white`;
// }
let menuicon = document.getElementById(`menuicon1`);
let menu = document.getElementById(`hide`);
menu.style.display = `none`;

menuicon.addEventListener(`click`, display);
function display() {
    if (menu.style.display=="none") {
        menu.style.display = "block";
    }
    else{
        menu.style.display = "none";
    }
    
}
