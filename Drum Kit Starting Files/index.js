const button = document.querySelectorAll('.drum');

//using for each method
button.forEach(buttonitems=>{
    buttonitems.addEventListener('click', e=>{
        
        makesound(e.target.textContent);
        
        // buttonanimation(e.target.currentkey);

        //this toggle the pressed class directly
        // e.target.classList.toggle('pressed')

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


document.addEventListener('keypress', evt=>{
    makesound(evt.key);
    buttonanimation(evt)
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

function buttonanimation(currentkey){
    var activebutton = document.querySelector('.' + currentkey);
    activebutton.classList.add('pressed')
}




