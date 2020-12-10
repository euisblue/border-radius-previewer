const topLeft = document.getElementById('top-left');
const topRight = document.getElementById('top-right');
const bottomLeft = document.getElementById('bottom-left');
const bottomRight = document.getElementById('bottom-right');

const preview = document.getElementById('app').children[1];

const copyButton = document.getElementById('copy');

function evaluate(val) {
    copyButton.innerText = "Copy CSS";
    copyButton.style.border = "1px solid #6c6c6c";
    let number = val.match(/\d+/g);
    let unit = val.match(/[pxem%]+/g);

    if (unit === '' || unit === undefined || unit === null) {
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

copyButton.addEventListener('click', (e) => {
    e.target.innerText = "Copied!";
    e.target.style.border = "1px solid #37612b";

    let tl = topLeft.value;
    let tr = topRight.value;
    let bl = bottomLeft.value;
    let br = bottomRight.value;

    if (tl.match(/[pxem%]+/g) === null) tl += "px";
    if (tr.match(/[pxem%]+/g) === null) tr += "px";
    if (bl.match(/[pxem%]+/g) === null) bl += "px";
    if (br.match(/[pxem%]+/g) === null) br += "px";

    const firefox = `-moz-border-bottom-left-radius: ${tl};
    -moz-border-bottom-left-radius: ${tr};
    -moz-border-bottom-left-radius: ${bl};
    -moz-border-bottom-left-radius: ${br};`;

    const safari = `-webkit-border-bottom-left-radius: ${tl};
    -webkit-border-bottom-left-radius: ${tr};
    -webkit-border-bottom-left-radius: ${bl};
    -webkit-border-bottom-left-radius: ${br};`;

    const css = `border-top-left-radius: ${tl};
    border-top-right-radius: ${tr};
    border-bottom-left-radius: ${bl};
    border-bottom-right-radius: ${br};`;

    let dummy = document.getElementById('dummy');
    dummy.innerText = `{
    ${css}
    ${firefox}
    ${safari}
}`;

    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(dummy);
    selection.removeAllRanges();
    selection.addRange(range);

    document.execCommand('copy');
    selection.removeAllRanges();
})