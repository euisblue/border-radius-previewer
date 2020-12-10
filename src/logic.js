const topLeft = document.getElementById('top-left');
const topRight = document.getElementById('top-right');
const bottomLeft = document.getElementById('bottom-left');
const bottomRight = document.getElementById('bottom-right');

const preview = document.getElementById('app').children[1];

topLeft.addEventListener("input", (e) => {
    preview.style.borderTopLeftRadius = e.target.value;
});

topRight.addEventListener("input", (e) => {
    preview.style.borderTopRightRadius = e.target.value;
});

bottomRight.addEventListener("input", (e) => {
    preview.style.borderBottomRightRadius = e.target.value;
});

bottomLeft.addEventListener("input", (e) => {
    preview.style.borderBottomLeftRadius = e.target.value;
});