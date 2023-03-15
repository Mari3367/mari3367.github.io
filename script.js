// for Tablet size add 4 horizontal finger components

let componentsNumber = 4;
let screenWidth = screen.width;


// window.addEventListener('resize', function() {


    if(screenWidth >= 601 && screenWidth <= 1024) {

        for(let i = 1; i <= componentsNumber; i++) {
            let img = document.createElement('img');
            img.src = 'images/rounded-rectangle.svg';
            img.className = 'horizontal-finger';
            img.classList.add(`fing-comp-${i}`);
            document.getElementById('container').appendChild(img);
        }

    }
  
//    });
