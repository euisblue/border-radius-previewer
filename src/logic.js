const topLeft = document.getElementById('top-left');
const topRight = document.getElementById('top-right');
const bottomLeft = document.getElementById('bottom-left');
const bottomRight = document.getElementById('bottom-right');

const preview = document.getElementById('app').children[1];

function evaluate(val) {
    let number = val.match(/\d+/g);
    let unit = val.match(/[pxem%]+/g);

    if(unit === '' || unit === undefined || unit === null) {
        unit = "px";
    }

    return [number, unit];
}

topLeft.addEventListener("input", (e) => {
    const [number, unit] = evaluate(e.target.value);
    preview.style.borderTopLeftRadius = `${number}${unit}`;
});

topRight.addEventListener("input", (e) => {
    const [number, unit] = evaluate(e.target.value);
    preview.style.borderTopRightRadius = `${number}${unit}`;
});

bottomRight.addEventListener("input", (e) => {
    const [number, unit] = evaluate(e.target.value);
    preview.style.borderBottomRightRadius = `${number}${unit}`;
});

bottomLeft.addEventListener("input", (e) => {
    const [number, unit] = evaluate(e.target.value);
    preview.style.borderBottomLeftRadius = `${number}${unit}`;
});