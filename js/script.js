// const menuBtn = document.querySelector('.menu-btn');
// let menuOpen = false;
// menuBtn.addEventListener('click', () => {
//     if(!menuOpen) {
//         menuBtn.classList.add('open');
//         menuOpen = true;
//     } else {
//         menuBtn.classList.remove('open');
//         menuOpen = false;
//     }
// });
function toggleClass(className) {
    const body = document.querySelector("body");
    
    if (!body.classList.contains(className)) {
        body.classList.add(className);
    }
    else {
        body.classList.remove(className);
    }
}

function toggle(){
    toggleClass('openButton');
    console.log("toggle called");
}

const buttonElement = document.getElementsByClassName("menu-btn")[0];
buttonElement.addEventListener("click", toggle);