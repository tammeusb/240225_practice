const up = document.querySelector('.up');
const down = document.querySelector('.down');
const both = document.querySelector('.both');

up.addEventListener('mouseup', message);
down.addEventListener('mousedown', message);
both.addEventListener('click', message);

function message() {
    alert("what's the difference???");
}

document.addEventListener('keypress', (e) => {
    alert(`I didn't tell you to press ${e.key}...`);
})