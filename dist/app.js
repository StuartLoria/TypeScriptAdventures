"use strict";
console.log('Happy Coding Exploration!');
const textEl = document.getElementById('myText');
const buttonEl = document.querySelector('button');
const labelEl = document.getElementById('myLabel');
function clickEventHandler() {
    let textDom = textEl;
    let textDomValue = textDom.value;
    let labelDom = labelEl;
    labelDom.innerText = textDomValue;
}
if (buttonEl) {
    buttonEl.addEventListener('click', clickEventHandler);
}
//# sourceMappingURL=app.js.map