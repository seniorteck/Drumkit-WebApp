const button = document.querySelectorAll('.drum');

//using for each
button.forEach(e=>{
    e.addEventListener('click', (pa)=>{
        // console.log(pa.target.style.color = 'white')
        makesound(pa.target.textContent)
        // console.log(pa.target.textContent);
    });
});


//using for loop method
// for(i=0; i<button.length; i++){
//     button[i].addEventListener('click', ()=>{
//         alert('you clicked me')
//     });
// }


// var audio = new Audio('sounds/crash.mp3');
//         audio.play();


document.addEventListener('keypress', (e)=>{
    makesound(e.key)
})


function makesound(key){

    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
        break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
        break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
        break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
        break;
        case "j":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
        break;
        case "k":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
        break;
        case "l":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
        break;
    
        default:
            console.log('not avaliable')
    };
}




