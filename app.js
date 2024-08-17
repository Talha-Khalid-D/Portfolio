// Auto Typing

const devintrotext = document.querySelector(".typing");
const cursor = document.querySelector(".cursor");

const introwords = ['Web Developer','Web Designer','Python Developer', 'DSA Learner', 'Programmer', 'CS Student'];


// delays between text displaying

const typingdelay = 200;
const erasingdelay = 200;
// delay between current and next letter
const newletterdelay = 2000;

let index = 0;
let charindex = 0;

// functions and methods 

function type() {
    if (charindex < introwords[index].length) {
        devintrotext.textContent += introwords[index].charAt(charindex);
        charindex++;
        setTimeout(type, typingdelay);
    } else {
        setTimeout(erase, newletterdelay);
    }
}

function erase() {
    if (charindex > 0) {
        devintrotext.textContent = introwords[index].substring(0, charindex - 1);
        charindex--;
        setTimeout(erase, erasingdelay);
    } else {
        index++;
        if (index >= introwords.length) {
            index = 0;
        }
        setTimeout(type, typingdelay + 1100);
    }
}

// event listener

document.addEventListener('DOMContentLoaded', () => {
    if (introwords.length) {
        setTimeout(type, newletterdelay);
    }
})

