let text1 = document.getElementById('text1');

let textocult = document.getElementById('textocult');

text1.addEventListener('click', toggleText);
function toggleText(){
    textocult.classList.toggle('show')
}

