// let bulb = document.getElementById('myImage');
//         let btn1 = document.getElementById('btn1');
//         let btn2 = document.getElementById('btn2');

//         btn1.addEventListener('click', function bulbon(){
//             let Blon = bulb.src='img/Onblub.gif'
//             return Blon;      
//         } )
//        btn2.addEventListener('click', function bulboff(){
//             let Bloff = bulb.src='img/Offblub.gif'
//             return Bloff;      
//         })

// Code Change
let image = document.getElementById("img")
let changeImg = document.getElementById('btn_img')

changeImg.addEventListener("click",function(){
    if (changeImg.innerText == "Turn On") {
        image.src = "img/Onblub.gif"
        changeImg.innerText = "Turn Off"
        changeImg.style.background = "red"
        changeImg.style.border = "5px solid yellow"
        changeImg.style.color = "#fff"
    }else if(changeImg.innerText == "Turn Off"){
        image.src = "img/Offblub.gif"
        changeImg.innerText = "Turn On"
        changeImg.style.background = "yellow"
        changeImg.style.border = "5px solid red"
        changeImg.style.color = "#000"
    }
})